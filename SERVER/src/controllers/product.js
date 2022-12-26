// External Module:
const createError = require('http-errors')

//Internal Module:
const Product = require('../models/product')
const Review = require('../models/review')
const { unlinkSingleImage } = require('../utils/files')
const { regxSearchQuery } = require('../utils/mongoose')

/**
 * @desc Create
 * @Route [POST]- /api/v1/products
 * @Access protected - [admin]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    let newData = new Product(req.body)
    await newData.save()
    res.status(200).json(newData)
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /api/v1/products/:id
 * @Access protected - [admin]
 * @returns {Object}
 */
const getSingle = async (req, res, next) => {
  try {
    let productQuery = { _id: req.params.id }
    let reviewQuery = { product: req.params.id }
    let projection =
      'name description brand price taxRate discount countInStock images reviewsCount rating createdAt'
    const products = await Product.findOne(productQuery, projection)
      .populate({
        path: 'supplier',
        select: 'name contractName mobile',
      })
      .populate({
        path: 'category',
        select: 'category tags -_id',
      })

    const reviews = await Review.find(reviewQuery).populate({
      path: 'user',
      select: 'name email avatar -_id',
    })

    res.status(200).json({ ...products._doc, reviews: reviews })
  } catch (error) {
    console.log({ error })
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /api/v1/products
 * @Access protected - [admin]
 * @returns {Array<JSON>}
 */
const getAll = async (req, res, next) => {
  try {
    const { search, page = 0, limit = 0 } = req.query
    const query = search
      ? regxSearchQuery(search, ['name', 'brand', 'description', 'tags'])
      : {}
    let projection =
      'name description brand price taxRate discount countInStock images reviewsCount rating createdAt'
    const options = { sort: { createdAt: 1 } }
    const totalCount = await Product.countDocuments(query)
    const data = await Product.find(query, projection, options)
      .limit(limit)
      .skip(limit * (page - 1))
      .populate({
        path: 'category',
        select: 'category tags -_id',
      })

    res.set('x-total-count', totalCount)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/products/:id
 * @Access protected - [admin]
 * @returns {JSON} - Updated Object
 */
const update = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = {
      new: true,
      projection:
        'name description brand price taxRate discount countInStock images reviewsCount rating createdAt',
    }
    let {
      user,
      supplier,
      category,
      tags,
      reviews,
      reviewsCount,
      rating,
      images,
      ...updatedData
    } = req.body
    let data = await Product.findOneAndUpdate(
      query,
      updatedData,
      options
    ).populate({
      path: 'category',
      select: 'category tags -_id',
    })
    res.status(200).json(data)
  } catch (error) {
    console.log({ error })
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /api/v1/products/:id
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteSingle = async (req, res, next) => {
  try {
    let productQuery = { _id: req.params.id }
    let reviewQuery = { product: req.params.id }
    const product = await Product.findOne(productQuery)
    //Delete Reivews
    await Review.deleteMany(reviewQuery)

    //Delete Images
    product?.images.forEach((element) => {
      if (element.includes(process.env.APP_URL)) {
        unlinkSingleImage(element)
      }
    })

    //Delete Products
    await Product.findByIdAndDelete(productQuery)

    res.status(200).json({ deletedCount: 1 })
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Delete All
 * @Route [DELETE]- /api/v1/products/destroy
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteAll = async (req, res, next) => {
  try {
    let result = await Product.deleteMany()
    await Review.deleteMany()

    res.status(200).json({ deletedCount: result?.deletedCount })
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

//Export Module:
module.exports = {
  create,
  getSingle,
  getAll,
  update,
  deleteSingle,
  deleteAll,
}

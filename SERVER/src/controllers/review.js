// External Module:
const createError = require('http-errors')

//Internal Module:
const Review = require('../models/review')
const Product = require('../models/product')
const { regxSearchQuery } = require('../utils/mongoose')

/**
 * @desc Create
 * @Route [POST]- /api/v1/reviews
 * @Access protected - [admin]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    let prepareData = { ...req.body }
    let newData = new Review(prepareData)
    await newData.save()

    //Retrive Existing Reviewed Product
    const productQuery = { _id: req.body.product }
    const currentProduct = await Product.findOne(productQuery)

    //Update Review Count and Rating into Product
    const reviewsCount = currentProduct.reviewsCount + 1
    const rating = Number(
      (currentProduct.rating * currentProduct.reviewsCount + newData.rating) /
        reviewsCount
    ).toFixed(1)

    const updatedProduct = {
      reviewsCount,
      rating,
    }
    const productOptions = { new: true }
    await Product.findByIdAndUpdate(
      productQuery,
      updatedProduct,
      productOptions
    )

    res.status(200).json(newData)
  } catch (error) {
    if (error?._message) {
      let message = error?.message?.split(':').pop()
      next(createError(422, message))
    } else {
      next(createError(500, error))
    }
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /api/v1/reviews/:id
 * @Access protected - [admin]
 * @returns {Object}
 */
const getSingle = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = {}
    const data = await Review.findOne(query, projection)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /api/v1/reviews
 * @Access protected - [admin]
 * @returns {Array<JSON>}
 */
const getAll = async (req, res, next) => {
  try {
    const { search, page = 0, limit = 0 } = req.query
    let query = search ? regxSearchQuery(search, ['comment']) : {}
    let projection = {}
    const options = { sort: { id: 1 } }
    const totalCount = await Review.countDocuments(query)
    const data = await Review.find(query, projection, options)
      .limit(limit)
      .skip(limit * (page - 1))

    res.set('x-total-count', totalCount)
    res.status(200).json(data)
  } catch (error) {
    if (error?._message) {
      let message = error?.message?.split(':').pop()
      next(createError(422, message))
    } else {
      next(createError(500, error))
    }
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/reviews/:id
 * @Access protected - [admin]
 * @returns {JSON} - Updated Object
 */
const update = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = {
      new: true,
    }
    //Modify Review
    let updatedReview = await Review.findOneAndUpdate(query, req.body, options)

    //Find Existing Product
    const productQuery = { _id: updatedReview.product }
    const currentProduct = await Product.findOne(productQuery)

    //Update Product:
    const totalRating = Number(
      currentProduct.rating * currentProduct.reviewsCount + updatedReview.rating
    )

    const updatedData = {
      rating: Number(
        (totalRating - currentProduct.rating) / currentProduct.reviewsCount
      ).toFixed(1),
    }

    const productOptions = { new: true }
    await Product.findByIdAndUpdate(productQuery, updatedData, productOptions)

    res.status(200).json(updatedReview)
  } catch (error) {
    if (error?._message) {
      let message = error?.message?.split(':').pop()
      next(createError(422, message))
    } else {
      next(createError(500, error))
    }
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /api/v1/reviews/:id
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteSingle = async (req, res, next) => {
  try {
    const reviewQuery = { _id: req.params.id }
    const review = await Review.findByIdAndDelete(reviewQuery)

    //Modify Product While Deleting Review
    const productQuery = { _id: review.product }
    const productOptions = { new: true }
    const product = await Product.findOne(productQuery)

    //Update Review To Product
    const reviewsCount = product.reviewsCount - 1
    const rating = Number(
      (product.rating * product.reviewsCount - review.rating) / reviewsCount
    ).toFixed(1)

    const updatedProduct = {
      reviewsCount,
      rating,
    }
    const modifiedProduct = await Product.findByIdAndUpdate(
      productQuery,
      updatedProduct,
      productOptions
    )
    await Review.deleteOne(reviewQuery)
    res.status(200).json({ deletedCount: 1 })
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Delete All
 * @Route [DELETE]- /api/v1/reviews/destroy
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteAll = async (req, res, next) => {
  try {
    let result = await Review.deleteMany()
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

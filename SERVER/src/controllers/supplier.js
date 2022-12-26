// External Module:
const createError = require('http-errors')

//Internal Module:
const Supplier = require('../models/supplier')
const Address = require('../models/address')

/**
 * @desc Create
 * @Route [POST]- /api/v1/suppliers
 * @Access protected - [admin]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    const newAddress = new Address(req.body.address)
    await newAddress.save()
    let newSupplier = new Supplier({ ...req.body, address: newAddress._id })
    const supplier = await (
      await newSupplier.save()
    ).populate({
      path: 'address',
      select: 'addressLine postCode city country',
    })

    res.status(200).json(supplier)
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /api/v1/suppliers/:id
 * @Access protected - [admin]
 * @returns {Object}
 */
const getSingle = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = {}
    const data = await Supplier.findOne(query, projection).populate({
      path: 'address',
      select: 'addressLine postCode city country',
    })
    res.status(200).json(data)
  } catch (error) {
    console.log({ error })
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /api/v1/suppliers
 * @Access protected - [admin]
 * @returns {Array<JSON>}
 */
const getAll = async (req, res, next) => {
  try {
    let query = {}
    let projection = {}
    const options = { sort: { id: 1 } }
    const data = await Supplier.find(query, projection, options).populate({
      path: 'address',
      select: 'addressLine postCode city country',
    })
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/suppliers/:id
 * @Access protected - [admin]
 * @returns {JSON} - Updated Object
 */
const update = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = {
      new: true,
    }
    let updatedData = await Supplier.findOneAndUpdate(
      query,
      req.body,
      options
    ).populate({
      path: 'address',
      select: 'addressLine postCode city country',
    })
    res.status(200).json(updatedData)
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /api/v1/suppliers/:id
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteSingle = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let result = await Supplier.findByIdAndDelete(query).populate({
      path: 'address',
      select: 'addressLine postCode city country',
    })
    let addressQuery = { _id: result?.address?._id }
    await Address.findByIdAndDelete(addressQuery)

    res.status(200).json({ deletedCount: 1 })
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Delete All
 * @Route [DELETE]- /api/v1/suppliers/destroy
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteAll = async (req, res, next) => {
  try {
    let result = await Supplier.deleteMany()
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

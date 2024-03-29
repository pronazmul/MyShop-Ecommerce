// External Module:
const createError = require('http-errors')

//Internal Module:
const Address = require('../models/address')

/**
 * @desc Create
 * @Route [POST]- /api/v1/addresses
 * @Access protected - [admin]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    let data = new Address(req.body)
    await data.save()
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /api/v1/addresses/:id
 * @Access protected - [admin]
 * @returns {Object}
 */
const getSingle = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = {}
    const data = await Address.findOne(query, projection)
    res.status(200).json(data)
  } catch (error) {
    console.log({ error })
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /api/v1/addresses
 * @Access protected - [admin]
 * @returns {Array<JSON>}
 */
const getAll = async (req, res, next) => {
  try {
    let query = {}
    let projection = {}
    const options = { sort: { id: 1 } }
    const data = await Address.find(query, projection, options)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/addresses/:id
 * @Access protected - [admin]
 * @returns {JSON} - Updated Object
 */
const update = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = {
      new: true,
    }
    let updatedData = await Address.findOneAndUpdate(query, req.body, options)
    res.status(200).json(updatedData)
  } catch (error) {
    console.log({ error })
    next(createError(500, 'Internal Server Error!'))
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /api/v1/addresses/:id
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteOne = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let result = await Address.findByIdAndDelete(query)
    res.status(200).json({ deletedCount: 1 })
  } catch (error) {
    next(createError(500, 'Internal Server Errorx!'))
  }
}

/**
 * @desc Delete All
 * @Route [DELETE]- /api/v1/addresses/destroy
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteAll = async (req, res, next) => {
  try {
    let result = await Address.deleteMany()
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
  deleteOne,
  deleteAll,
}

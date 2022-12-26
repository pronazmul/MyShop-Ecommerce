// External Modules:
const router = require('express').Router()

// Controller:
const {
  create,
  getSingle,
  getAll,
  update,
  deleteOne,
} = require('../controllers/address')

//Middlewares
const authCheck = require('../middlewares/auth/authenticate')
const {
  updateAddressSchema,
  addAddressSchema,
} = require('../schema/addressSchema')
const validateRequest = require('../middlewares/validateRequest')

//Routes:
router.delete('/:id', deleteOne)
router.get('/:id', authCheck, getSingle)
router.put('/:id', authCheck, validateRequest(updateAddressSchema), update)
router.post('/', validateRequest(addAddressSchema), create)
router.get('/', authCheck, getAll)

// Exports
module.exports = router

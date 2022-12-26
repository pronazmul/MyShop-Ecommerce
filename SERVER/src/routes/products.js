// External Modules:
const router = require('express').Router()

// Controller:
const {
  create,
  getSingle,
  getAll,
  update,
  deleteSingle,
} = require('../controllers/product')

//Middleware
const authCheck = require('../middlewares/auth/authenticate')
const validateRequest = require('../middlewares/validateRequest')
const {
  createProductSchema,
  updateProductSchema,
} = require('../schema/productSchema')

//Routes:
router.get('/:id', authCheck, getSingle)
router.delete('/:id', authCheck, deleteSingle)
router.put('/:id', validateRequest(updateProductSchema), authCheck, update)
router.post('/', validateRequest(createProductSchema), authCheck, create)
router.get('/', authCheck, getAll)

// Exports
module.exports = router

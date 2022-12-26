// External Modules:
const router = require('express').Router()

// Controller:
const {
  create,
  getSingle,
  getAll,
  update,
  deleteSingle,
  deleteAll,
} = require('../controllers/supplier')
//Middleware
const authCheck = require('../middlewares/auth/authenticate')
const validateRequest = require('../middlewares/validateRequest')
const {
  createSupplierSchema,
  updateSupplierSchema,
} = require('../schema/supplierSchema')

//Routes:
// router.delete('/destroy', deleteAll)

router.post('/', validateRequest(createSupplierSchema), authCheck, create)
router.get('/', authCheck, getAll)
router.get('/:id', authCheck, getSingle)
router.put('/:id', validateRequest(updateSupplierSchema), authCheck, update)
router.delete('/:id', authCheck, deleteSingle)

// Exports
module.exports = router

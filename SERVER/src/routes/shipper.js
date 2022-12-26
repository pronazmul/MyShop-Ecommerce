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
} = require('../controllers/shipper')

//Middleware
const authCheck = require('../middlewares/auth/authenticate')
const validateRequest = require('../middlewares/validateRequest')
const { createShipper, updateShipper } = require('../schema/shipperSchema')

//Routes:
// router.delete('/destroy', deleteAll)

router.post('/', validateRequest(createShipper), create)
router.get('/', authCheck, getAll)
router.get('/:id', authCheck, getSingle)
router.put('/:id', validateRequest(updateShipper), authCheck, update)
router.delete('/:id', authCheck, deleteSingle)

// Exports
module.exports = router

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
} = require('../controllers/review')

//Middleware
const validateRequest = require('../middlewares/validateRequest')
const authCheck = require('../middlewares/auth/authenticate')
const {
  createReviewSchema,
  updateReviewSchema,
} = require('../schema/reviewSchema')

//Routes
// router.delete('/destroy', deleteAll)

router.put('/:id', authCheck, validateRequest(updateReviewSchema), update)
router.get('/:id', authCheck, getSingle)
router.delete('/:id', authCheck, deleteSingle)
router.post('/', authCheck, validateRequest(createReviewSchema), create)
router.get('/', authCheck, getAll)

// Exports
module.exports = router

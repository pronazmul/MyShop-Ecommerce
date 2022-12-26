// External Modules:
const router = require('express').Router()

// Controller:
const {
  create,
  getSingle,
  getAll,
  update,
  deleteSingle,
} = require('../controllers/category')

//Middleware
const authCheck = require('../middlewares/auth/authenticate')
const { singleConvertToWebp } = require('../middlewares/upload/imageConverter')
const { singleUploader } = require('../middlewares/upload/imageUploader')
const validateRequest = require('../middlewares/validateRequest')
const {
  createCategorySchema,
  updateCategorySchema,
} = require('../schema/categorySchema')

router.post(
  '/',
  authCheck,
  singleUploader('image', 'categories'),
  singleConvertToWebp('categories'),
  validateRequest(createCategorySchema),
  create
)
router.get('/', authCheck, getAll)
router.get('/:id', authCheck, getSingle)
router.put('/:id', validateRequest(updateCategorySchema), authCheck, update)
router.delete('/:id', authCheck, deleteSingle)

// Exports
module.exports = router

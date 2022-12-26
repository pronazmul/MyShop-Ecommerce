const router = require('express').Router()
const userRoutes = require('./user')
const authRoutes = require('./auth')
const shipperRoutes = require('./shipper')
const supplierRoutes = require('./supplier')
const productRoutes = require('./products')
const categoryRoutes = require('./category')
const reviewRoutes = require('./review')
const addressRoutes = require('./address')
const orderRoutes = require('./order')
const paymentRoutes = require('./payment')
const authenticate = require('../middlewares/auth/authenticate')

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Application Routes
router.use('/api/v1/auth', authRoutes)
router.use('/api/v1/users', authenticate, userRoutes)
router.use('/api/v1/shippers', authenticate, shipperRoutes)
router.use('/api/v1/suppliers', authenticate, supplierRoutes)
router.use('/api/v1/products', authenticate, productRoutes)
router.use('/api/v1/categories', authenticate, categoryRoutes)
router.use('/api/v1/reviews', authenticate, reviewRoutes)
router.use('/api/v1/addresses', authenticate, addressRoutes)
router.use('/api/v1/orders', authenticate, orderRoutes)
router.use('/api/v1/payments', authenticate, paymentRoutes)

// Module Exports
module.exports = router

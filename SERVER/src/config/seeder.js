const colors = require('colors')
const { mongooseConnection } = require('./db')
const {
  Users,
  Addresses,
  Shippers,
  Suppliers,
  Categories,
  Products,
  Reviews,
} = require('./data')
const {
  randomValueFromArray,
  randomMultipleFromArray,
} = require('../utils/array')

// Configuration
require('dotenv').config()
mongooseConnection()

//Models
const People = require('../models/people')
const Address = require('../models/address')
const Shipper = require('../models/shipper')
const Supplier = require('../models/supplier')
const Product = require('../models/product')
const Category = require('../models/category')
const Review = require('../models/review')
const Cart = require('../models/cart')
const WishList = require('../models/wishList')
const Order = require('../models/order')

// Import Data Seeder:
const importData = async () => {
  try {
    //Destroy All
    await People.deleteMany()
    await Address.deleteMany()
    await Shipper.deleteMany()
    await Supplier.deleteMany()
    await Category.deleteMany()
    await Product.deleteMany()
    await Review.deleteMany()
    await Cart.deleteMany()
    await WishList.deleteMany()
    await Order.deleteMany()

    //Import Users
    const usersArray = await People.create(Users)
    const usersIds = usersArray.map((user) => user._id)

    //Import Address
    const preparedAddress = Addresses.map((address) => ({
      ...address,
      user: randomValueFromArray(usersIds),
    }))
    const addressArray = await Address.insertMany(preparedAddress)
    const addressIds = addressArray.map((address) => address._id)

    //Import Suppliers
    const supplierArray = await Supplier.insertMany(Suppliers)
    const supplierIds = supplierArray.map((supplier) => supplier._id)

    //Import Shippers
    const shipperArray = await Shipper.insertMany(Shippers)

    //Import Category
    const categoryArray = await Category.insertMany(Categories)

    //Import Products
    const prepareProducts = Products.map((product) => {
      const category = randomValueFromArray(categoryArray)
      return {
        ...product,
        user: randomValueFromArray(usersIds),
        supplier: randomValueFromArray(supplierIds),
        category: category._id,
        tags: [...product.tags, ...randomMultipleFromArray(category.tags, 2)],
      }
    })
    const productArray = await Product.insertMany(prepareProducts)
    const productIds = productArray.map((product) => product._id)

    //Import Reviews
    const prepareReview = productIds.map((pId) => {
      const reviews = randomMultipleFromArray(Reviews, 3)
      return reviews.map((review) => ({
        ...review,
        user: randomValueFromArray(usersIds),
        product: pId,
      }))
    })
    const reviewArray = await Review.insertMany(prepareReview.flat())

    //Update Products With Reviews
    const reviewedProducts = productIds.map((productId) => {
      const reviews = reviewArray.filter((r) => r.product === productId)

      const ratingCount = reviews.reduce(
        (state, current) => state + current.rating,
        0
      )
      const rating = Number((ratingCount / reviews.length).toFixed(1))
      return {
        updateOne: {
          filter: {
            _id: productId,
          },
          update: {
            reviewsCount: reviews.length,
            rating,
          },
        },
      }
    })
    await Product.bulkWrite(reviewedProducts)

    //Import Cart:
    const prepareCarts = usersArray.map((user) => ({
      user: user._id,
      products: randomMultipleFromArray(productArray, 4),
    }))
    const cartArray = await Cart.insertMany(prepareCarts)

    //Import Wishlist:
    const prepareWishlist = usersArray.map((user) => ({
      user: user._id,
      products: randomMultipleFromArray(productArray, 4),
    }))
    const wishlistArray = await WishList.insertMany(prepareWishlist)

    console.log('Data Inserted'.magenta.inverse)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

// Destroy Data Seeder:
const destroyData = async () => {
  try {
    await People.deleteMany()
    await Address.deleteMany()
    await Shipper.deleteMany()
    await Supplier.deleteMany()
    await Category.deleteMany()
    await Product.deleteMany()
    await Review.deleteMany()
    await Cart.deleteMany()
    await WishList.deleteMany()
    await Order.deleteMany()

    console.log('Data Destroyed Successfully'.rainbow.bold)
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`.red.bold)
    process.exit(1)
  }
}

// Manage Seeder Command:
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}

// Required Packeges
let mongoose = require('mongoose')

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'UserID Is Required!'],
      ref: 'People',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'ProductID is Required!'],
      ref: 'Product',
    },
    comment: String,
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review

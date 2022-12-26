// Required Packeges
let mongoose = require('mongoose')

const wishListSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'People',
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

const WishList = mongoose.model('WishList', wishListSchema)

module.exports = WishList

// Required Packeges
let mongoose = require('mongoose')

const cartSchema = mongoose.Schema(
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

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart

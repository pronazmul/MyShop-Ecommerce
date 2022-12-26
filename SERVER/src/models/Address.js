// Required Packeges
let mongoose = require('mongoose')

const addressSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'People',
      required: true,
    },
    title: String,
    addressLine: { type: String, required: true },
    postCode: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
)

const Address = mongoose.model('Address', addressSchema, 'address')

module.exports = Address

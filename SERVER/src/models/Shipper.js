// Required Packeges
let mongoose = require('mongoose')

const shipperModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    contractName: { type: String, required: true },
    mobile: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
)

// Make User Modelresult
const Shipper = mongoose.model('Shipper', shipperModel)

// Export User Model
module.exports = Shipper

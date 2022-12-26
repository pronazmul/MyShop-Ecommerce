// Required Packeges
let mongoose = require('mongoose')

const supplierModel = mongoose.Schema(
  {
    name: { type: String, default: true },
    contractName: { type: String, default: true },
    mobile: { type: String, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Make User Modelresult
const Supplier = mongoose.model('Supplier', supplierModel)

// Export User Model
module.exports = Supplier

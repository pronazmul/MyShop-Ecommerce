// Required Packeges
let mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
  {
    category: { type: String, required: true },
    image: { type: String, required: true },
    tags: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
)

// Make User Modelresult
const Category = mongoose.model('Category', categorySchema)

// Export User Model
module.exports = Category

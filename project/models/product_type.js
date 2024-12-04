const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const ProductType = mongoose.model('ProductType', productTypeSchema);
module.exports = ProductType;

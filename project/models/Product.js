// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  id_type: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductType' },
  description: { type: String },
  unit_price: { type: Number },
  promotion_price: { type: Number },
  image: { type: String },
  unit: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

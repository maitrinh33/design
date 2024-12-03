// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number, // Original price of the product before any discount
    required: false
  },
  salePrice: {
    type: Number, // Sale price after discount, if applicable
    required: false
  },
  image: {
    type: String, // URL or image path for the product image
    required: true
  },
  category: {
    type: String, // e.g., electronics, furniture, etc.
    required: true
  },
  stockQuantity: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Product model
module.exports = mongoose.model('Product', productSchema);

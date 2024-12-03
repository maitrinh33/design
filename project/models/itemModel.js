const mongoose = require('mongoose');

// Define the schema for an Item
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }
});

// Export the Item model
module.exports = mongoose.model('Item', itemSchema);

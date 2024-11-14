// Import the necessary Mongoose module
const mongoose = require('mongoose');

// Define the schema for the 'category' collection
const categorySchema = new mongoose.Schema({
  // Name field for the category
  name: {
    type: String,
    required: true, // The name field is required
    unique: true // The name field must be unique for each category
  },
  // Image field for the category
  img: {
    type: String,
    required: true // The image field is required
  }
});

// Create a Mongoose model for the 'category' collection
module.exports = mongoose.model('category', categorySchema);


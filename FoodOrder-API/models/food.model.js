// Import the necessary Mongoose module
const mongoose = require('mongoose');

// Define the schema for the 'food' collection
const foodSchema = new mongoose.Schema({
  // Name field for the food item
  name: {
    type: String,
    required: true, 
    unique: true // The name field must be unique for each food item
  },
  price: {
    type: Number,
    required: true 
  },
  img: {
    type: String,
    required: true 
  },
  address: {
    type: String,
    required: true 
  },
  // Category ID field for the food item
  category_id: {
    type: mongoose.Schema.Types.ObjectId, // This field stores the ObjectId of the associated category
    ref: 'category' // This field references the 'category' collection
  }
});

// Create a Mongoose model for the 'food' collection
module.exports = mongoose.model('food', foodSchema);

 
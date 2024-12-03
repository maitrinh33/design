// Import the necessary Mongoose module
const mongoose = require('mongoose');

// Define the schema for the 'cart' collection
const cartSchema = new mongoose.Schema({
  // Flag to indicate if the order is placed
  is_order: {
    type: Boolean,
    default: false // The default value is false
  },
  // Reference to the associated account
  account_id: {
    type: mongoose.Schema.Types.ObjectId, // This field stores the ObjectId of the associated account
    ref: 'account' // This field references the 'account' collection
  },
  // Array of items in the cart
  items: [
    {
      // Reference to the associated food item
      food: {
        type: mongoose.Schema.Types.ObjectId, // This field stores the ObjectId of the associated food item
        ref: 'food' // This field references the 'food' collection
      },
      // Quantity of the food item
      quantity: {
        type: Number,
        default: 1 // The default quantity is 1
      }
    }
  ]
});

// Create a Mongoose model for the 'cart' collection
module.exports = mongoose.model('cart', cartSchema);


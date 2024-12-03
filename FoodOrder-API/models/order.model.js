// Import the necessary Mongoose module
const mongoose = require('mongoose');

// Define the schema for the 'order' collection
const orderSchema = new mongoose.Schema({
  // Customer information
  customer: {
    type: String,
    required: true // The customer field is required
  },
  // Customer address
  address: {
    type: String,
    required: true // The address field is required
  },
  // Customer phone number
  phone: {
    type: String,
    required: true // The phone field is required
  },
  // Total order amount
  total_money: {
    type: Number,
    required: true // The total_money field is required
  },
  // Payment method
  payment_method: {
    type: String,
    enum: ["Online", "On Delivery"], // The payment_method field can only be "Online" or "On Delivery"
    default: "On Delivery" // The default payment method is "On Delivery"
  },
  // Flag to indicate if the order is a paid order
  is_payment: {
    type: Boolean,
    default: false // The default value is false (unpaid)
  },
  // Order status
  status: {
    type: String,
    enum: ["pending", "confirm", "ship", "receive"], // The status field can only have these values
    default: "pending" // The default status is "pending"
  },
  // Reference to the associated cart
  cart_id: {
    type: mongoose.Schema.Types.ObjectId, // This field stores the ObjectId of the associated cart
    ref: 'cart' // This field references the 'cart' collection
  }
});

// Create a Mongoose model for the 'order' collection
module.exports = mongoose.model('order', orderSchema);


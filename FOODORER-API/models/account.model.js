// Import the necessary Mongoose module
const mongoose = require('mongoose');

// Define the schema for the 'account' collection
const accountSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  // User role field, with 'admin' and 'user' as valid options, and 'user' as the default
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
});

// Create a Mongoose model for the 'account' collection
module.exports = mongoose.model('account', accountSchema);


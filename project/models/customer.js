const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone_number: { type: String, required: true },
  note: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;

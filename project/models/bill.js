const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  id_customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  date_order: { type: Date, required: true },
  total: { type: Number, required: true },
  payment: { type: String },
  note: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;

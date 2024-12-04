const mongoose = require('mongoose');

const billDetailSchema = new mongoose.Schema({
  id_bill: { type: mongoose.Schema.Types.ObjectId, ref: 'Bill', required: true },
  id_product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  unit_price: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const BillDetail = mongoose.model('BillDetail', billDetailSchema);
module.exports = BillDetail;

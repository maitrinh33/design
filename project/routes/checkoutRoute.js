const express = require('express');
const Bill = require('./models/Bill');
const BillDetail = require('./models/BillDetail');
const Product = require('./models/Product');
const Customer = require('./models/Customer'); // Assuming you have a Customer model

const router = express.Router();

router.post('/checkout', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    notes,
    paymentMethod,
    cartItems, 
    totalAmount, 
  } = req.body;

  try {
    // 1. Find or create customer
    let customer = await Customer.findOne({ email });
    if (!customer) {
      customer = new Customer({
        firstName,
        lastName,
        email,
        phone,
        address,
      });
      await customer.save();
    }

    // 2. Create a new Bill
    const newBill = new Bill({
      id_customer: customer._id,
      date_order: new Date(),
      total: totalAmount,
      payment: paymentMethod,
      note: notes,
    });
    await newBill.save();

    // 3. Create Bill Details
    const billDetails = cartItems.map((item) => ({
      id_bill: newBill._id,
      id_product: item.id_product, // Assuming `id_product` is in `cartItems`
      quantity: item.quantity,
      unit_price: item.price, // Price per unit
    }));

    await BillDetail.insertMany(billDetails);

    // 4. Respond with success
    res.redirect('/order-success'); // Or any success page
  } catch (error) {
    console.error('Error processing checkout:', error);
    res.status(500).send('An error occurred while processing your order.');
  }
});

module.exports = router;

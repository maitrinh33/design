const orderModel = require('../models/order.model');

module.exports = {
  getOrders: async (req, res) => {
    try {
      // Fetch orders from the database
      const orders = await orderModel.find();
      
      // Log orders to see if they are being fetched correctly
      console.log('Orders:', orders);
      
      // Render the order view with the fetched orders
      res.render('order', { orders });
    } catch (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ message: 'Error fetching orders', error: err });
    }
  }
};

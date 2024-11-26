// routers/order.router.js
const express = require('express');
const router = express.Router();
const Order = require('../models/order.model');
const orderController = require('../controllers/order.controller');

// Define the route for fetching orders
router.get('/', orderController.getOrders);
module.exports = router;
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();  // Fetch orders from database
        res.render("order", { orders });    // Render 'order.ejs' without the .ejs extension
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
// routers/order.router.js
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();  // Fetch orders from the database
        console.log(orders);  // Log the orders to check if they are fetched
        res.render("order", { orders });    // Render 'order.ejs'
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

// Create a new order (POST request)
router.post("/", async (req, res) => {
    try {
      const { customerName, items, totalAmount, status } = req.body;
      const newOrder = new Order({ customerName, items, totalAmount, status });
      await newOrder.save();
      res.redirect("/orders"); // Redirect to the orders page after creating an order
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });
  

module.exports = router;

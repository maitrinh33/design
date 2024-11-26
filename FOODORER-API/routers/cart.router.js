// routers/cart.router.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller'); // Ensure correct path

// Define routes with valid controller methods
router.post('/add', cartController.addToCart);  // Ensure addToCart is defined
router.get('/', cartController.getCartItems);   // Ensure getCartItems is defined
router.delete('/:id', cartController.removeFromCart);  // Ensure removeFromCart is defined

module.exports = router;

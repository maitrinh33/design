const express = require('express');
const router = express.Router();

// Import your controller functions
const accountController = require('../controllers/accountController');
const cartController = require('../controllers/cartController');
const orderController = require('../controllers/orderController');

// Define routes
router.get('/accounts', accountController.getAllAccounts);
router.post('/accounts', accountController.createAccount);
router.get('/cart', cartController.getCart);
router.post('/order', orderController.createOrder);

// Export the router
module.exports = router;

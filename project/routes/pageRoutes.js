const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Define routes
router.get('/', pageController.homepage);  
router.get('/about', pageController.about);  
router.get('/contact', pageController.contact);  
router.get('/product_type', pageController.productType);  
router.get('/checkout', pageController.checkout);  
router.get('/login', pageController.login);  
router.get('/signup', pageController.signup);  
router.get('/shopping_cart', pageController.shoppingCart); 
router.get('/pricing', pageController.pricing);  

module.exports = router;

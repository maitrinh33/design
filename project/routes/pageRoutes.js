const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Define routes

router.get('/', pageController.homepage);  // Route for the homepage
router.get('/about', pageController.about);  // Route for the about page
router.get('/contact', pageController.contact);  // Route for the contact page

module.exports = router;

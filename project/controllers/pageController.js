//controllers/pageController.js
const Product = require('../models/product');
const Bill = require('../models/bill_detail');
const ProductType = require('../models/product_type');

// Homepage route handler for Product  models
exports.homepage = async (req, res) => {
  try {
    // Fetch products and slides from MongoDB
    const products = await Product.find();
    // Render the homepage with products 
    // Pass 'content' as null if not needed
    res.render('index', { 
      products, 
      content: null 
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error loading homepage');
  }
};

// About page route handler
exports.about = (req, res) => {
  res.render('index', { content: 'partials/about' });
};

// Contact page route handler
exports.contact = (req, res) => {
  res.render('index', { content: 'partials/contact' });
};


// Product Type page route handler
exports.productType = async (req, res) => {
  try {
      const products = await Product.find();  
      res.render('index', {
          products,
          content: 'product_type' 
      });
  } catch (err) {
      console.log(err);
      res.status(500).send('Error loading product type page');
  }
};

// Checkout page route handler
exports.checkout = (req, res) => {
  res.render('index', { content: 'checkout' });
};

// Signup page route handler
exports.shoppingCart = (req, res) => {
  res.render('index', { content: 'shopping_cart' }); 
};

// Pricing page route handler
exports.pricing = (req, res) => {
  res.render('index', { content: 'pricing' }); 
};

// Login page route handler
exports.login = (req, res) => {
  res.render('index', { content: 'login' });
};

// Signup page route handler
exports.signup = (req, res) => {
  res.render('index', { content: 'signup' }); 
};








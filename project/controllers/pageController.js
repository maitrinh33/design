// Import the models for the product 
const Product = require('../models/Product');
const product_type = require('../models/product_type');

// Homepage route handler for Product  models
exports.homepage = async (req, res) => {
  try {
    // Fetch products and slides from MongoDB
    const products = await Product.find();
    // Render the homepage with products 
    // Pass 'content' as null if not needed
    res.render('index', { 
      products, 
      content: null // No content for homepage, or specify a default
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








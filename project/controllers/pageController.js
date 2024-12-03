// Import the models for the product and slide
const Product = require('../models/Product');
const Slide = require('../models/Slide');

// Homepage route handler for Product and Slide models
exports.homepage = async (req, res) => {
  try {
    // Fetch products and slides from MongoDB
    const products = await Product.find();
    const slides = await Slide.find().sort({ position: 1 });

    // Render the homepage with products and slides (or use 'index' if desired)
    res.render('index', { products, slides });  // Rendering 'index.ejs' for homepage
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





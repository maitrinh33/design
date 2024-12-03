const mongoose = require('mongoose');
const Product = require('./models/Product'); // Update path if necessary

// Database connection
mongoose.connect('mongodb://localhost:27017/project', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    seedProducts();
  })
  .catch(err => {
    console.log('Error connecting to MongoDB:', err);
  });

// Base product data for New and Top Products
const baseProduct = (name, price, salePrice, image, description, category, stockQuantity) => ({
  name,
  price,
  salePrice,
  image,
  description,
  category,
  stockQuantity,
});

// Generate New Products (4 products)
const newProducts = [
  baseProduct("New Product 1", 50, 40, "1.jpg", "New product description", "Electronics", 100),
  baseProduct("New Product 2", 60, 50, "2.jpg", "New product description", "Electronics", 50),
  baseProduct("New Product 3", 70, 60, "3.jpg", "New product description", "Electronics", 30),
  baseProduct("New Product 4", 80, 70, "4.jpg", "New product description", "Electronics", 120),
];

// Generate Top Products (8 products)
const topProducts = [
  baseProduct("Top Product 1", 100, 90, "1.jpg", "Top product description", "Fashion", 200),
  baseProduct("Top Product 2", 120, 100, "2.jpg", "Top product description", "Fashion", 150),
  baseProduct("Top Product 3", 130, 110, "3.jpg", "Top product description", "Fashion", 180),
  baseProduct("Top Product 4", 140, 120, "4.jpg", "Top product description", "Fashion", 90),
  baseProduct("Top Product 5", 150, 130, "5.jpg", "Top product description", "Fashion", 250),
  baseProduct("Top Product 6", 160, 140, "6.jpg", "Top product description", "Fashion", 300),
  baseProduct("Top Product 7", 170, 150, "7.jpg", "Top product description", "Fashion", 80),
  baseProduct("Top Product 8", 180, 160, "8.jpg", "Top product description", "Fashion", 400),
];

// Combine both product arrays
const products = [...newProducts, ...topProducts];

async function seedProducts() {
  try {
    // Clear the existing products collection
    await Product.deleteMany({});
    console.log('Old products deleted.');

    // Insert all products at once
    await Product.insertMany(products);
    console.log('New products added successfully.');
  } catch (err) {
    console.error('Error seeding products:', err);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
}

const mongoose = require('mongoose');
const Product = require('./models/product'); // Adjust the path as needed
const ProductType = require('./models/product_type'); // To ensure `id_type` references valid types

// Database connection
mongoose.connect('mongodb://localhost:27017/project', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    seedProducts();
  })
  .catch(err => {
    console.log('Error connecting to MongoDB:', err);
  });

// Sample product types (ensure they exist before linking them in products)
const productTypes = [
  { name: "Electronics", description: "Electronic items" },
  { name: "Fashion", description: "Clothing and accessories" },
];

// Base product data for New and Top Products
const baseProduct = (name, id_type, unit_price, promotion_price, image, description, unit) => ({
  name,
  id_type,
  description,
  unit_price,
  promotion_price,
  image,
  unit,
});

// New Products (4 products)
const newProductsData = [
  { name: "New Product 1", unit_price: 50, promotion_price: 40, image: "1.jpg", description: "New product description", unit: "pcs", type: "Electronics" },
  { name: "New Product 2", unit_price: 60, promotion_price: 50, image: "2.jpg", description: "New product description", unit: "pcs", type: "Electronics" },
  { name: "New Product 3", unit_price: 70, promotion_price: 60, image: "3.jpg", description: "New product description", unit: "pcs", type: "Electronics" },
  { name: "New Product 4", unit_price: 80, promotion_price: 70, image: "4.jpg", description: "New product description", unit: "pcs", type: "Electronics" },
];

// Top Products (8 products)
const topProductsData = [
  { name: "Top Product 1", unit_price: 100, promotion_price: 90, image: "1.jpg", description: "Top product description", unit: "pcs", type: "Fashion" },
  { name: "Top Product 2", unit_price: 120, promotion_price: 100, image: "2.jpg", description: "Top product description", unit: "pcs", type: "Fashion" },
  { name: "Top Product 3", unit_price: 130, promotion_price: 110, image: "3.jpg", description: "Top product description", unit: "pcs", type: "Fashion" },
  { name: "Top Product 4", unit_price: 140, promotion_price: 120, image: "4.jpg", description: "Top product description", unit: "pcs", type: "Fashion" },
  { name: "Top Product 5", unit_price: 150, promotion_price: 130, image: "5.jpg", description: "Top product description", unit: "pcs", type: "Fashion" },
  { name: "Top Product 6", unit_price: 160, promotion_price: 140, image: "6.jpg", description: "Top product description", unit: "pcs", type: "Fashion" },
  { name: "Top Product 7", unit_price: 170, promotion_price: 150, image: "7.jpg", description: "Top product description", unit: "pcs", type: "Fashion" },
  { name: "Top Product 8", unit_price: 180, promotion_price: 160, image: "8.jpg", description: "Top product description", unit: "pcs", type: "Fashion" },
];

async function seedProducts() {
  try {
    // Clear the existing products collection
    await Product.deleteMany({});
    console.log('Old products deleted.');

    // Clear and seed product types
    await ProductType.deleteMany({});
    const savedTypes = await ProductType.insertMany(productTypes);
    console.log('Product types added.');

    // Map product type names to their ObjectIds
    const typeMap = savedTypes.reduce((map, type) => {
      map[type.name] = type._id;
      return map;
    }, {});

    // Assign `id_type` to products based on their type
    const products = [...newProductsData, ...topProductsData].map(product => ({
      ...baseProduct(
        product.name,
        typeMap[product.type],
        product.unit_price,
        product.promotion_price,
        product.image,
        product.description,
        product.unit
      )
    }));

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

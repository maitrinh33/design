const Product = require('../models/Product');

// Lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Thêm sản phẩm mới
exports.createProduct = async (req, res) => {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file ? req.file.path : '', // Kiểm tra xem có file ảnh không
    });
  
    try {
      console.log('Creating product:', req.body); // Debug log
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error('Error creating product:', error); // Debug log
      res.status(400).json({ message: error.message });
    }
  };
  

// Update product
exports.updateProduct = async (req, res) => {
    try {
      // Check if a new image is uploaded, otherwise use the old image
      const updatedProductData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file ? req.file.path : req.body.image, // Keep the old image if no new file
      };
  
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProductData, { new: true });
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

// Delete product
exports.deleteProduct = async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id);
      res.status(204).send(); // Successfully deleted
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const express = require('express');
const multer = require('multer');
const productController = require('../controllers/productController');
const router = express.Router();

// Cấu hình Multer để upload hình ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// Định nghĩa các route
router.get('/', productController.getAllProducts);

// POST route for creating a product
router.post('/', upload.single('image'), productController.createProduct);

// PUT route for updating a product (with file upload support)
router.put('/:id', upload.single('image'), productController.updateProduct);

// DELETE route for deleting a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;

const express = require("express");
const router = express.Router();

// Import the category controller
const categoryController = require("../controllers/category.controller");

router.get('/new', foodController.createFoodForm); // Use the controller function

// Define routes and associate them with controller functions
router.route("/")
  .get(categoryController.getCategories)  
  .post(categoryController.createCategory);

router.route("/:id")
  .get(categoryController.getCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;

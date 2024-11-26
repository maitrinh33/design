const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food.controller'); // Import the controller properly
console.log(foodController); // Temporary debugging

// Route to retrieve all foods
router.get('/', foodController.getFoods);

// Route to create, update, and delete food items
router.route('/')
  .post(foodController.createFood) // Handle POST request to create a new food item
  .get(foodController.getFoods); // Handle GET request to fetch all food items

router.route('/:id')
  .patch(foodController.updateFood) // Handle PATCH request to update a specific food item
  .delete(foodController.deleteFood); // Handle DELETE request to delete a specific food item

module.exports = router; // Export the router

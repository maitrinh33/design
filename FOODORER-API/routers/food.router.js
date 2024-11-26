const express = require('express');
const router = express.Router();
router.get("/new", (req, res) => {
    res.render('create-food'); 
  });
  
// Import the controller functions from the food.controller.js file
const { createFood, getFoods, updateFood, deleteFood } = require('../controllers/food.controller');

// Define the routes and map them to the corresponding controller functions
router.route('/')
  .post(createFood)   // Handle POST requests to create a new food item
  .get(getFoods);     // Handle GET requests to retrieve all food items

router.route('/:id')
  .patch(updateFood)  // Handle PATCH requests to update a specific food item
  .delete(deleteFood) // Handle DELETE requests to delete a specific food item

// Export the configured router
module.exports = router;

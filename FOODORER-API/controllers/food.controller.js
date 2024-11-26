const Food = require('../models/food.model'); // Correct model import
const Category = require('../models/category.model'); // For populating category details

// Controller to retrieve all foods
const getFoods = async (req, res) => {
  try {
    const body_query = {}; // Adjust based on query parameters, if needed
    const foods = await Food.find(body_query).populate("category_id"); // Fetch foods with populated category

    // Check if the request expects a JSON response or an HTML page
    if (req.accepts('html')) {
      // If the request is for an HTML page, render the foods in the food.ejs template
      res.render('food', { foods }); // Pass the foods data to the view
    } else {
      // If the request is for JSON, respond with the foods data as JSON
      res.status(200).json(foods);
    }
  } catch (error) {
    console.error("Error retrieving foods:", error); // Log the error to the console
    res.status(500).json({ message: "Error retrieving foods", error: error.message || error });
  }
};

// Controller to create a new food item
const createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body); // Create a new food item
    // If the request is for HTML, redirect to the list of foods after creation
    if (req.accepts('html')) {
      res.redirect('/foods'); // Redirect to foods list after creating food
    } else {
      res.status(201).json(food); // Respond with the created food as JSON
    }
  } catch (error) {
    console.error("Error creating food:", error);
    res.status(500).json({ message: 'Error creating food', error: error.message || error });
  }
};

const editFoodForm = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id).populate('category_id');
    if (!food) {
      return res.status(404).send('Food not found');
    }

    // Fetch all categories for the select input
    const categories = await Category.find();

    res.render('edit-food', { food, categories });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching food for edit', error: err.message });
  }
};

// Controller to update a food item by ID
const updateFood = async (req, res) => {
  try {
    const { id } = req.params; // Extract the food ID from the request parameters
    const updatedFood = await Food.findByIdAndUpdate(id, req.body, { new: true }); // Update the food
    // Check if the request is for an HTML page or JSON response
    if (req.accepts('html')) {
      res.redirect(`/foods/${id}`); // Redirect to the updated food page after update
    } else {
      res.status(200).json(updatedFood); // Respond with the updated food as JSON
    }
  } catch (error) {
    console.error("Error updating food:", error);
    res.status(500).json({ message: 'Error updating food', error: error.message || error });
  }
};

// Controller to delete a food item by ID
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params; // Extract the food ID from the request parameters
    await Food.findByIdAndDelete(id); // Delete the food item
    // Check if the request is for an HTML page or JSON response
    if (req.accepts('html')) {
      res.redirect('/foods'); // Redirect to the foods list after deletion
    } else {
      res.status(200).json({ message: 'Food item deleted successfully' }); // Respond with success message
    }
  } catch (error) {
    console.error("Error deleting food:", error);
    res.status(500).json({ message: 'Error deleting food', error: error.message || error });
  }
};

module.exports = { getFoods, createFood, updateFood, deleteFood };

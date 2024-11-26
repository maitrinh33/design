// controllers/category.controller.js
module.exports = {
  // Get all categories
  getCategories: (req, res) => {
    // Logic to fetch all categories from the database
    res.json({ message: "List of categories" });
  },

  // Create a new category
  createCategory: (req, res) => {
    // Logic to create a new category
    res.json({ message: "Category created" });
  },

  // Get category by ID
  getCategory: (req, res) => {
    // Logic to fetch a category by ID
    res.json({ message: `Category with ID ${req.params.id}` });
  },

  // Update category
  updateCategory: (req, res) => {
    // Logic to update a category
    res.json({ message: `Category with ID ${req.params.id} updated` });
  },

  // Delete category
  deleteCategory: (req, res) => {
    // Logic to delete a category
    res.json({ message: `Category with ID ${req.params.id} deleted` });
  },
};

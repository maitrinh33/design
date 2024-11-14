// Import Mongoose models
const mongoose = require('mongoose');
const connectDB = require('./configs/database');
const Account = require('./models/account.model');
const Cart = require('./models/cart.model');
const Category = require('./models/category.model');
const Food = require('./models/food.model');
const Order = require('./models/order.model');

// Connect to the database
connectDB();

// Function to add a cart and order for a specific account and food item
const addCartAndOrder = async (account, food) => {
  try {
    // Create a new cart for the account
    const cart = new Cart({
      account_id: account._id,
      items: [
        { food: food._id, quantity: 2 },
      ],
    });
    await cart.save();

    // Create a new order associated with the cart
    const order = new Order({
      customer: account.username,
      address: account.address,
      phone: account.phone,
      total_money: food.price * 2,  // quantity * price of the food item
      payment_method: 'On Delivery',
      is_payment: false,
      status: 'pending',
      cart_id: cart._id,  // Link order to the cart
    });
    await order.save();

    console.log('Cart and order added successfully');
  } catch (error) {
    console.error('Error adding cart and order:', error.message);
  }
};

// Function to seed initial data
const seedData = async () => {
  try {
    // Check if the account already exists
    let account = await Account.findOne({ username: 'testuser' });
    if (!account) {
      // Create a sample account if it doesn't exist
      account = new Account({
        username: 'testuser',
        password: 'password123',
        phone: '1234567890',
        address: '123 Main St',
        role: 'user',
      });
      await account.save();
    }

    // Check if the category already exists
    let category = await Category.findOne({ name: 'Beverages' });
    if (!category) {
      // Create a sample category if it doesn't exist
      category = new Category({
        name: 'Beverages',
        img: 'beverages.jpg',
      });
      await category.save();
    }

    // Check if the food item already exists
    let food = await Food.findOne({ name: 'Coca-Cola' });
    if (!food) {
      // Create a sample food item if it doesn't exist
      food = new Food({
        name: 'Coca-Cola',
        price: 1.5,
        img: 'coca_cola.jpg',
        address: '123 Cola St',
        category_id: category._id, // Link food item to the category
      });
      await food.save();
    }

    // Call addCartAndOrder with the account and food items
    await addCartAndOrder(account, food);

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error.message);
  }
};

// Run the seeding function
seedData().then(() => {
  mongoose.connection.close(); // Close the connection after seeding is done
});

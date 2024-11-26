const mongoose = require('mongoose');
const Food = require('./models/food.model');
const Category = require('./models/category.model');
const Order = require('./models/order.model');

async function seedDatabase() {
  try {
    console.log('Seeding process started...');

    // Create or find categories
    const category1 = await Category.findOne({ name: 'Pizza' }) || await Category.create({ name: 'Pizza' });
    const category2 = await Category.findOne({ name: 'Burger' }) || await Category.create({ name: 'Burger' });

    console.log(`Category ${category1.name} exists or was created`);
    console.log(`Category ${category2.name} exists or was created`);

    // Create or find food items
    const food1 = await Food.findOne({ name: 'Cheese Pizza' });
    if (!food1) {
      await Food.create({
        name: 'Cheese Pizza',
        price: 10,
        img: 'pizza.jpg',
        address: 'NY',
        category_id: category1._id
      });
      console.log('Food item Cheese Pizza created');
    } else {
      console.log('Food item Cheese Pizza already exists');
    }

    const food2 = await Food.findOne({ name: 'Beef Burger' });
    if (!food2) {
      await Food.create({
        name: 'Beef Burger',
        price: 5,
        img: 'burger.jpg',
        address: 'LA',
        category_id: category2._id
      });
      console.log('Food item Beef Burger created');
    } else {
      console.log('Food item Beef Burger already exists');
    }

    // Create orders if they don't exist
    const existingOrder1 = await Order.findOne({ customerName: 'John Doe', totalAmount: 25 });
    if (!existingOrder1) {
      await Order.create({
        customerName: 'John Doe',
        items: [
          { name: 'Cheese Pizza', quantity: 2, price: 10 },
          { name: 'Beef Burger', quantity: 1, price: 5 }
        ],
        totalAmount: 25,
        status: 'Pending'
      });
      console.log('Order for John Doe created');
    } else {
      console.log('Order for John Doe already exists');
    }

    const existingOrder2 = await Order.findOne({ customerName: 'Jane Smith', totalAmount: 10 });
    if (!existingOrder2) {
      await Order.create({
        customerName: 'Jane Smith',
        items: [
          { name: 'Cheese Pizza', quantity: 1, price: 10 }
        ],
        totalAmount: 10,
        status: 'Completed'
      });
      console.log('Order for Jane Smith created');
    } else {
      console.log('Order for Jane Smith already exists');
    }

    console.log('Seeding process completed successfully!');
  } catch (err) {
    console.error('Error seeding database:', err.message);
    console.error('Stack trace:', err.stack);
  } finally {
    mongoose.connection.close();
    console.log('Database connection closed.');
  }
}

mongoose.connect('mongodb://localhost:27017/foodOrderDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => seedDatabase());

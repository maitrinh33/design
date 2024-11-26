//index.js
const categoryRouter = require("./category.router");

// Import the food router
const foodRouter = require("./food.router");

// Import the account router
const accountRouter = require("./account.router");

// Import the cart router
const cartRouter = require("./cart.router");

// index.js
const orderRouter = require("./order.router");

module.exports = (app) => {
  app.use("/api/orders", orderRouter);
};

module.exports = (app) => {
  // Mount the category router on the "/api/categories" endpoint
  app.use("/api/categories", categoryRouter);

  // Mount the food router on the "/api/foods" endpoint
  app.use("/api/foods", foodRouter);

  // Mount the account router on the "/api/accounts" endpoint
  app.use("/api/accounts", accountRouter);

  // Mount the cart router on the "/api/cart" endpoint
  app.use("/api/cart", cartRouter);
};
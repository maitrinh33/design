const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./configs/database");
const orderRouter = require("./routers/order.router");
const foodRouter = require('./routers/food.router');
const methodOverride = require('method-override');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 

// Connect to the database
connectDB();

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to FOODORDER API!</h1>
    <div>
      <a href="/foods"><button>Go to Food List</button></a> 
    </div>
    <div>
      <a href="/orders"><button>Go to Orders List</button></a>
    </div>
  `);
});

// Register the routers
app.use('/foods', foodRouter); 
app.use("/orders", orderRouter);

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

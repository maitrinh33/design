// controllers/cart.controller.js
module.exports = {
    addToCart: (req, res) => {
      // Logic to add item to cart
      res.status(200).send('Item added to cart');
    },
  
    getCartItems: (req, res) => {
      // Logic to get all cart items
      res.status(200).send('Fetching cart items');
    },
  
    removeFromCart: (req, res) => {
      // Logic to remove item from cart
      res.status(200).send('Item removed from cart');
    }
  };
  
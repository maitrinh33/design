// routers/account.router.js
const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account.controller");  

// Define the routes and associate them with controller functions
router.route("/")
  .get(accountController.getAccounts)    
  .post(accountController.createAccount);

router.route("/:id")
  .get(accountController.getAccount)
  .patch(accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = router;

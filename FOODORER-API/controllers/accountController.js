// controllers/accountController.js
const Account = require('../models/account.model'); 

exports.createAccount = async (req, res) => {
  try {
    const { username, password, phone, address, role } = req.body;
    const account = new Account({ username, password, phone, address, role });
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add more controller functions as needed
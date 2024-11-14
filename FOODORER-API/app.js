// app.js
const Account = require('./models/account.model'); // Adjusted path if necessary


// Function to get all accounts
const getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to create a new account
const createAccount = async (req, res) => {
    try {
        const newAccount = new Account(req.body);
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllAccounts, createAccount };

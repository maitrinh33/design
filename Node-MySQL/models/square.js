// models/square.js
const mysql = require('mysql2');
// Check if environment variables are loaded
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',          
  user: 'root',       
  password: '3005',   
  database: 'maitrinh'         
});
const promisePool = pool.promise();

// Function to save square data
const saveSquareData = async (sideLength, perimeter, area) => {
  try {
    const sql = 'INSERT INTO squares (sideLength, perimeter, area) VALUES (?, ?, ?)';
    const [results] = await promisePool.query(sql, [sideLength, perimeter, area]);
    return results;
  } catch (err) {
    console.error('Error saving to database:', err);
    throw err;
  }
};

module.exports = { saveSquareData };

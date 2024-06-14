const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "EggMetrics",
    connectTimeout: 60000
});

// Connect to MySQL
connection.connect(error => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// GET request to retrieve data from MySQL
app.get('/store-list', (req, res) => {
  connection.query('SELECT * FROM Stores', (error, results) => {
    if (error) {
      console.error('Error fetching data from MySQL:', error);
      res.status(500).json({ error: 'Error fetching data from MySQL' });
      return;
    }
    res.json(results);
  });
});

// POST request to insert data into MySQL
app.post('/add/store-list', (req, res) => {
  const { store_name } = req.body;
  if (!store_name) {
    res.status(400).json({ error: 'Name required' });
    return;
  }

  const newStore = { store_name };
  connection.query('INSERT INTO Stores SET ?', newStore, (error, result) => {
    if (error) {
      console.error('Error inserting data into MySQL:', error);
      res.status(500).json({ error: 'Error inserting data into MySQL' });
      return;
    }
    res.status(201).json({ message: 'Store added successfully', newStore });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
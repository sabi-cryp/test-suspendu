// Import necessary modules
const express = require('express');
const mysql = require('mysql2');

// Create an Express application
const app = express();
const port = 30001;

// Add middleware to parse JSON data
app.use(express.json());

// Set up MySQL connection
const connection = mysql.createConnection({
  host: '192.168.0.2', // Docker container name
  user: 'dockeruser',
  password: 'docker',
  database: 'api',
  port: 3307,
});

// Check if the connection to MySQL is successful
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Array of client data
const clients = [
  { id: 1, name: 'demo', email: 'demo@example.com', status:'active' },
  //{ id: 2, name: 'aymen', email: 'aymen@example.com' },
 // { id: 3, name: 'mehdi', email: 'mehdi@example.com' },
];

// Define a route to get clients
app.get('/get_clients', (req, res) => {
  res.json(clients);
});

// Define a route to create a new client
app.post('/create_client', (req, res) => {
  const { name, email, status } = req.body;

  // Perform validation on the data if needed

  // Add the new client to the array
  const newClient = { id: clients.length + 1, name, email, status: status || 'active' };
  clients.push(newClient);

  res.json({ message: 'Client created successfully', newClient });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // You can change this port if needed

app.use(cors()); // Enables CORS for cross-origin requests
app.use(express.json()); // Parses JSON bodies

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
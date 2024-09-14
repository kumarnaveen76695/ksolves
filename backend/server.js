require('dotenv').config(); // Import dotenv to load environment variables
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// MongoDB connection using environment variable
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Middleware and routes setup (example)
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, Virtual Classroom API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

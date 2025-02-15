// const express = require('express');
// const app = express();
// const port = 3000;

// // First route
// app.get('/', (req, res) => {
//   res.send('Hello dear!');
// });

// // Second route
// app.get('/iqra', (req, res) => {
//   res.send('Iqra Tauseef');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const connectDB = require('./db'); // Import DB connection function

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Example Route
app.get('/', (req, res) => {
    res.send('MongoDB connected with Express.js');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();
const port = 3000;

// First route
app.get('/', (req, res) => {
  res.send('Hello dear!');
});

// Second route
app.get('/iqra', (req, res) => {
  res.send('Iqra Tauseef');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

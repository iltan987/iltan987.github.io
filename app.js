'use strict';

const express = require('express');
const app = express();

// Define a route that responds with a 200 status code
app.get('/', (req, res) => {
    res.status(200).send('OK');
});

// Start the Express server
const port = 17000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
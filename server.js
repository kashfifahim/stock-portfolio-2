const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

const stocks = [
    { symbol: 'TSLA', shares: 16},
    { symbol: 'GOOGL', shares: 20},
    { symbol: 'AMZN', shares: 20},
    { symbol: 'AAPL', shares: 14},
    { symbol: 'CSCO', shares: 1},
    { symbol: 'NOK', shares: 2},
];
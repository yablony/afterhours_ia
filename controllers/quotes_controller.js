const express = require('express');
const router = express.Router();

const Quote = require('../models/quotes');

router.get('/', (req, res) => {
    Quote
        .findRandom()
        .then(quote => res.json(quote));
});

module.exports = router;
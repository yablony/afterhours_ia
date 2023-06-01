const express = require('express');
const router = express.Router();

const Quote = require('../models/quotes');

router.get('/', (req, res) => {
    Quote
        .finAll()
        .then(quotes => res.json(quotes))
});

module.exports = router;
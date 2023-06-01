const express = require('express');
const router = express.Router();

const Quote = require('../models/quotes');

router.get('/', (req, res) => {
    Quote
        .findAll()
        .then(quotes => res.json(quotes))
});

module.exports = router;
const express = require('express');
const router = express.Router();

//models
const Quote = require('../models/quotes');
const { route } = require('./quotes_controller');


//routes

// to read user quotes
router.get('/', (req, res) => {
    Quote
        .findAll()
        .then(quote => res.json(quote));
});

//----------------------------------------------

//to create quotes
// not sure how to get the users Id here...
router.post('/api/quotes', (req, res) => {
    console.log('mooo')
    const userId = howGetIdHere
    const name = req.body.name
    const quote = req.body.quote

    Quote
        .create(userId, name, quote)
        .then(quote => res.json(quote))
})

module.exports = router;
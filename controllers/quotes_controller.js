const express = require('express');
const router = express.Router();

//models
const Quote = require('../models/quotes');
const User = require('../models/user');

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
router.post('/', (req, res) => {
    const userEmail = req.body.email
    const name = req.body.name
    const quote = req.body.quote

    User
        .findByEmail(userEmail)
        .then(user => {
            const userId = user.id;
            return userId;
        })
        .then(userId => 
            Quote
                .create(userId, name, quote)
                .then(quote => res.json(quote))
        )
})

module.exports = router;
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
// ------------------------------------------------

//to delete quotes

router.delete('/:id', (req, res) => {
    const quoteId = req.params.id

    Quote
        .delete(quoteId)
        .then(() => res.json({ message: 'quote deleted' }))
})

module.exports = router;
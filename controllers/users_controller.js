const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// models
const User = require('../models/user');

// routes
router.post('/', (req, res) => {
  const { username, first_name, last_name, email, password } = req.body;

  // using bcrypt to create password digest
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);

  User
    .create(username, first_name, last_name, email, passwordDigest)
    .then(email => res.json(email))
});

module.exports = router;
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')

router.post('/', (req, res) => {
  const { email, password } = req.body

  User
    .findByEmail(email)
    .then(user => {
      if (!user || email == '' || password == '') {
        res.status(400).json({ error: 'email or password are incorrect'})
      } else {
        // using bcrypt to validate the password:
        const isValidPassword = bcrypt.compareSync(password, user.password_digest)

        if (user && isValidPassword) {
          // log the user in
          req.session.userId = user.id
          res.json({ email: user.email })
        }
      }
    })
})

router.get('/', (req, res) => {
  const userId = req.session.userId
  // if logged in:
  if (userId) {
    User
      .findById(userId)
      .then(email => res.json({ result: 'successful', email: email }))
  } else {
    res.json({})
  }
})

router.get('/sessions/delete', (req, res) => {
  req.session.destroy((error) => {
    if (error)
    console.log('Error destroying the session')
    else {
      res.clearCookie('user_sid')
      res.redirect('/')
    }
  })
})


module.exports = router
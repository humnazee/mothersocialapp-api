const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

// routes
router.post('/', (req, res) => {
  const { name, email, password } = req.body

  // using bcrypt to create password digest
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

  User
    .create(name, email, passwordDigest)
    .then(email => res.json({email: email}))
})

router.get('/', (req, res) => {
  User
    .getUsers()
    .then(users => res.json(users))
})

router.get('/currentUser', (req, res) => {
  const userEmail = 

  User
    .findByEmail(userEmail)
    .then(user => res.json(user).id)
})

module.exports = router
const express = require('express')
const router = express.Router()

// models
const Post = require('../models/post')

// routes
router.get('/', (req, res) => {
    Post
      .findAll()
      .then(posts => res.json(posts))
  })

  router.get('/:post_id', (req, res) => {
    const postId = req.params.postId
  
    Post
      .findPostByPostId(postId)
      .then(post => res.json(post))
  })
  
  router.get('/:location', (req, res) => {
    const location = req.params.location
  
    Post
      .grabPostLocation(location)
      .then(location => res.json(location))
  })
  module.exports = router
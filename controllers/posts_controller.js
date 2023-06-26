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
  
  router.get('/:title', (req, res) => {
    const title = req.params.title
  
    Post
      .grabPostTitle(title)
      .then(title => res.json(title))
  })
  module.exports = router
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



  router.post('/', (req, res) => {
    const { title, content, image } = req.body;
    Post.createPost(title, content, image)
      .then((newPost) => res.json(newPost))
      .catch((error) => {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Failed to create post' });
      });
  });
  


  
  router.get('/:title', (req, res) => {
    const title = req.params.title
    Post
      .grabPostTitle(title)
      .then(title => res.json(title))
  })


 
  router.post('/:postId/like', async (req, res, next) => {
    try {
      const postId = req.params.postId;
      await Post.likePost(postId);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  });
  
 

  router.post('/:postId/unlike', async (req, res, next) => {
    try {
      const postId = req.params.postId;
      await Post.unlikePost(postId);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  });
  


  module.exports = router
const express = require('express')
const router = express.Router()

// models
const Comment = require('../models/comment')


// routes
router.get('/', (req, res) => {
  Comment
    .findAll()
    .then(comments => res.json(comments))
})
router.post('/', (req, res) => {
  const { post_id, comment } = req.body;
  const newComment = new Comment(post_id, comment);
  newComment.save()
    .then(comment => {
      res.status(201).json(comment);
    })
    .catch(error => {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'Failed to add comment' });
    });
});



router.delete('/:id', (req, res) => {
  const commentId = req.params.id

  Comment
    .delete(commentId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router
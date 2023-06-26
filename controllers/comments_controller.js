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
  const post_id = req.body.post_id
  const user_id = req.session.userId
  const comment = req.body.comment

  Comment
    .create(post_id, user_id, comments)
    .then(comment => res.json(comment))
})

router.patch('/', (req, res) => {
  const id = req.body.id
  const post_id = req.body.post_id
  const comment = req.body.comment
  const user_id = req.session.userId

  Comment
    .update(user_id, comment, id)
    .then(comment => res.json(comment))
})

router.delete('/:id', (req, res) => {
  const commentId = req.params.id

  Comment
    .delete(commentId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router
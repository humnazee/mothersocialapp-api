const db = require('../db/db')

const Post = {
  findAll: () => {
    const sql = 'SELECT * FROM posts'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  findPostByPostId: (post_id) => {
    const sql = `SELECT * FROM posts WHERE post_id = '$1'`

    return db
      .query(sql, [post_id])
      .then(dbRes => dbRes.rows)
  },

  grabPostTitles: (post_id) => {
    const sql = `SELECT * FROM posts WHERE title = '$1'`
  
    return db
      .query(sql, [post_id])
      .then(dbRes => dbRes.rows)
  }
}

module.exports = Post 
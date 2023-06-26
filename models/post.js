const db = require('../db/db');

class Post {
  static findAll() {
    const sql = 'SELECT * FROM posts';
    return db.query(sql).then((dbRes) => dbRes.rows);
  }

  static createPost(title, content, image_url) {
    const sql =
      'INSERT INTO posts (title, content, image_url) VALUES ($1, $2, $3) RETURNING *';

    return db.query(sql, [title, content, image_url]).then((dbRes) => dbRes.rows[0]);
  }

  static findPostByPostId(post_id) {
    const sql = 'SELECT * FROM posts WHERE post_id = $1';
    return db.query(sql, [post_id]).then((dbRes) => dbRes.rows);
  }

  static grabPostTitles(post_id) {
    const sql = 'SELECT * FROM posts WHERE title = $1';
    return db.query(sql, [post_id]).then((dbRes) => dbRes.rows);
  }

  save() {
    const { title, content, image_url } = this;
    const sql =
      'INSERT INTO posts (title, content, image_url) VALUES ($1, $2, $3) RETURNING *';

    return db.query(sql, [title, content, image_url]).then((dbRes) => dbRes.rows[0]);
  }
}

module.exports = Post;

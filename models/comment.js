// const db = require('../db/db')

// const Comment = {
//   findAll: () => {
//     const sql = "SELECT * FROM comments ";

//     return db
//       .query(sql)
//       .then(dbRes => dbRes.rows);
//   },

//   create: (comment, user_id, post_id) => {
//     const sql = `
//       INSERT INTO comments(comment, user_id, post_id)
//       VALUES ($1, $2, $3)
//       RETURNING *
//     `;

//     return db
//       .query(sql, [(comment, user_id, post_id)])
//       .then(dbRes => dbRes.rows[0])
//   },


  
//   update: (user_id, comment, commentId) => {
//     const sql = `
//       UPDATE comments SET user_id =$1, comment = $2 WHERE id = $3
//       RETURNING *
//     `

//     return db
//       .query(sql, [user_id, comment, commentId])
//       .then(dbRes => dbRes.rows[0])
//   },

//   delete: (commentId) => {
//     const sql = 'DELETE FROM comments WHERE id = $1'

//     return db.query(sql, [commentId])
//   }
// }

// module.exports = Comment


const db = require('../db/db')

class Comment {
  constructor(post_id, comment) {
    this.post_id = post_id;
    this.comment = comment;
  }

  save() {
    const sql = 'INSERT INTO comments (post_id, comment) VALUES ($1, $2) RETURNING *';
    const values = [this.post_id, this.comment];
    return db.query(sql, values)
      .then(dbRes => dbRes.rows[0]);
  }
}


  update: (user_id, comment, commentId) => {
    const sql = `
      UPDATE comments SET user_id =$1, comment = $2 WHERE id = $3
      RETURNING *
    `
    return db
      .query(sql, [user_id, comment, commentId])
      .then(dbRes => dbRes.rows[0])
  }
  

module.exports = Comment
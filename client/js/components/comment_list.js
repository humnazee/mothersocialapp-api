// function renderCommentList(postId) {
//     const commentListDOM = document.querySelector('#comments');
//     const comments = state.comments.filter(comment => comment.post_id === postId);
  
//     if (comments.length > 0) {
//       commentListDOM.innerHTML = `
//         <h3>Comments:</h3>
//         <ul>
//           ${comments.map(comment => `<li>${comment.comment}</li>`).join('')}
//         </ul>
//       `;
//     } else {
//       commentListDOM.innerHTML = '<p>No comments yet.</p>';
//     }
//   }
  
// function addComment (event, postId){
//     event.preventDefault()
//     const form = document.querySelector(".comment-form")
//     const data = Object.fromEntries(new FormData(form))
//     data.postId_id = postId
//     fetch('/api/comments', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     })
//         .then(res => res.json())
//         .then(comment => {
//             state.comments.push(comment)
//             const commentIndex = state.comments.length - 1
//             state.comments[commentIndex].email = state.loggedInUser.email
//             renderFilteredComments(postId);
//         });
//     console.log('your comment added successfully')
// }

function renderCommentList(postId) {
    const commentListDOM = document.querySelector('#comments');
    const comments = state.comments.filter(comment => comment.post_id === postId);
  
    if (comments.length > 0) {
      commentListDOM.innerHTML = `
        <h3>Comments:</h3>
        <ul>
          ${comments.map(comment => `<li>${comment.comment}</li>`).join('')}
        </ul>
      `;
    } else {
      commentListDOM.innerHTML = '<p>No comments yet.</p>';
    }
  }
function addComment(event, postId) {
    event.preventDefault();
    const form = document.querySelector(".comment-form");
    const data = Object.fromEntries(new FormData(form));
    data.post_id = postId;
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((comment) => {
        state.comments.push(comment);
        renderCommentList(postId);
      })
      .catch((error) => {
        console.error('Error adding comment:', error);
      });
    console.log('Your comment has been added successfully.');
  }
  
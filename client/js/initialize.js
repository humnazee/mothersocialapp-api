const state = {
    posts: [], // Renamed 'post' to 'posts' for consistency
    comments: [],
  };
  
  fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
        state.loggedInUser = { email: data.email };
      }
    })
    .catch(error => {
      console.error('Error fetching sessions:', error);
    });
  
  fetch('/api/posts')
    .then(res => res.json())
    .then(posts => {
      state.posts = posts;
      renderPostList(); // Call the renderPostList function here
      renderNav();
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
  
  fetch('/api/comments')
    .then(res => res.json())
    .then(comments => {
      state.comments = comments;
      console.log(state.comments);
    })
    .catch(error => {
      console.error('Error fetching comments:', error);
    });
  
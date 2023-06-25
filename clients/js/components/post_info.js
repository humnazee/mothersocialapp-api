async function renderPostInfo(post_id) {
    //wait for the whole image url to be sent before proceed
    const postImageUrl = await (post_image_url)
    const postId = post_id;
    const filteredPost = state.posts.filter(post => post.post_id == postId);
    const post = filteredPost[0];
    const postDOM = document.querySelector('#page');
    postDOM.innerHTML = `
      <section class="post" data-id="${post.post_id}">
        <header>
          <h2>${postpost_image_url}</h2>
        </header>
        <p>${post.location}</p>
        <p>${post.content}(${post.created_at})</p>
      </section>
    `;
    if (state.loggedInUser != null) {
      postDOM.innerHTML += `
      <form class="comment-form" action="" onSubmit="addComment(event, ${post.post_id})">
        <input type="text" name="comment">
        <button>Submit Comment</button>
      </form>
  `}
    renderFilteredComments(post_id); 
  }

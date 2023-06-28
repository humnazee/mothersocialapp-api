function renderpost(){
    document.querySelector('#page').innerHTML = `
      <section class='create-post'>
        <form action="" onSubmit="createPost(event)">
          <h2>Add Post</h2>
          <fieldset>
            <label for="title">Title:</label>
            <input type="text" name="title" id="title">
          </fieldset>
          <fieldset>
            <label for="content">Content:</label>
            <textarea name="content" id="content" cols="30" rows="10"></textarea>
          </fieldset>
          <fieldset>
            <label for="image">Image URL:</label>
            <input type="text" name="image_url" id="image_url">
          </fieldset>
          <div id="error-message"></div>
          <button>Add Post</button>
        </form>
      </section>
    `;
}
  

function createPost(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const content = form.content.value;
  const image_url = form.image_url.value;
  const errorMessageElement = document.getElementById('error-message');

  
  if (content.trim() === '') {
    // Display an error message if the content field is empty
    errorMessageElement.textContent = 'Please fill in the content field';
    return;
  }

  fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image_url })
  })
    .then(res => res.json())
    .then(post => {
      state.posts.push(post);
      renderPostList();
    })
    .catch(error => {
      console.error('Error creating post:', error);
    });
}
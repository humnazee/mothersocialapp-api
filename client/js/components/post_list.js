function renderPostList() {
  const postListDOM = document.querySelector('#page');

  postListDOM.innerHTML = state.posts.map(post => `
    <section class="post" data-id="${post.id}">
      <header>
        <h2 onClick="renderPostInfo)">${post.title}</h2>
      </header>
      <div class="card">
  	<div class="card-img">
 <img src="${post.image_url}" alt="">
     </div> 
<div class="card-body">
   <h4 onClick="renderPostInfo)">${post.title}</h4>
  <p>${post.content}<p>
  <div class="post-footer">
      <button id="likeButton-{{ post.id }}" class="like-button" onclick="handleLikeButtonClick('{{ post.id }}')">
        Like
      </button>
      <span id="likeCount-{{ post.id }}" class="like-count"></span>
      </div>
    </div>
  <div class="card-footer">
    <form class="comment-form" onsubmit="addComment(event, ${post.id})">
      <input type="text" name="comment" placeholder="Add a comment">
      <button type="submit">Submit</button>
    </form>
    <div id="post-1">
  <div class="comments">
    <!-- Comments will be rendered here -->
  </div>
</div>
    <div id="comments-${post.id}"></div>
    </div>
  </section>
  `).join('');
  
renderEmptyCommentList();
}




function renderSearch() {
  document.querySelector('#page').innerHTML = `
    <form action="" class="search-bar" onsubmit="renderSearchResult(event)">
      <input type="text" name="title" placeholder="Please search post by title...">
      <button onclick="handleSearch()">Search Post By Title</button>
    </form>
  `;
  renderEmptyCommentList();
}


  function renderSearchResult(event) {
    event.preventDefault();
    const input = document.querySelector('.search-bar input').value.trim();

  if (input === '') {
    const errorMessage = 'Please enter a search query';
    renderErrorMessage(errorMessage);
    return;
   }

    const filteredPosts = state.posts.filter(post => post.title && post.title.toLowerCase().includes(input.toLowerCase()));
  
    const postListDOM = document.querySelector('#page');
    postListDOM.innerHTML = filteredPosts.map(post => `
      <section class="post" data-id="${post.id}">
        <header>
          <h2 onClick="renderPostInfo"></h2>
        </header>
        <div class="card">
          <div class="card-img">
            <img src="${post.image_url}" alt="">
          </div>
          <div class="card-body">
            <h4 onClick="renderPostInfo('${post.title}')">${post.title}</h4>
            <p>${post.content}</p>
            <div class="post-footer">
              <button id="likeButton-${post.id}" class="like-button" onclick="handleLikeButtonClick('${post.id}')">
                Like
              </button>
              <span id="likeCount-${post.id}" class="like-count">${post.likes || 0}</span>
            </div>
          </div>
          <div class="card-footer">
            <form class="comment-form" onsubmit="addComment(event, ${post.id})">
              <input type="text" name="comment" placeholder="Add a comment">
              <button type="submit">Submit</button>
            </form>
            <div id="comments-${post.id}" class="comments">
              <!-- Comments will be rendered here -->
            </div>
          </div>
        </div>
      </section>
    `).join('');
    
    renderEmptyCommentList();
  }

  function renderErrorMessage(message) {
    const errorMessageElement = document.createElement('div');
    errorMessageElement.classList.add('error-message');
    errorMessageElement.textContent = message;
  
    const pageContainer = document.querySelector('#page');
    pageContainer.innerHTML = '';
    pageContainer.appendChild(errorMessageElement);
  }




function handleLikeButtonClick(postId) {
  const likeButton = document.getElementById(`likeButton-${postId}`);
  
  // Check if the post is already liked
  const isLiked = likeButton.classList.contains('liked');
  
  if (isLiked) {
    fetch(`/api/posts/${postId}/unlike`, {
      method: 'POST',
    })
      .then((res) => {
        if (res.ok) {
          likeButton.classList.remove('liked');
          updateLikeCount(postId, false); // Update the like count
        } else {
          throw new Error('Failed to unlike post');
        }
      })
      .catch((error) => {
        console.error('Error unliking post:', error);
      });
  } else {
    fetch(`/api/posts/${postId}/like`, {
      method: 'POST',
    })
      .then((res) => {
        if (res.ok) {
          likeButton.classList.add('liked');
          updateLikeCount(postId, true); // Update the like count
        } else {
          throw new Error('Failed to like post');
        }
      })
      .catch((error) => {
        console.error('Error liking post:', error);
      });
  }
}

// Function to update the like count dynamically
function updateLikeCount(postId, isLiked) {
  const likeCountElement = document.getElementById(`likeCount-${postId}`);
  const currentLikeCount = parseInt(likeCountElement.textContent);
  
  if (isLiked) {
    likeCountElement.textContent = currentLikeCount + 1;
  } else {
    likeCountElement.textContent = currentLikeCount - 1;
  }
}










function renderPostList() {
  const postListDOM = document.querySelector('#page');

  postListDOM.innerHTML = state.posts.map(post => `
    <section class="post" data-id="${post.id}">
      <header>
        <h2 onClick="renderPostInfo(${post.id})">${post.title}</h2>
      </header>
      <div class="card">
        <div class="card-img">
          <img src="${post.image_url}" alt="">
        </div>
        <div class="card-body">
          <h4 onClick="renderPostInfo(${post.id})">${post.title}</h4>
          <p>${post.content}</p>
          <div class="post-footer">
            <button id="likeButton-${post.id}" class="like-button" onclick="handleLikeButtonClick(${post.id})">
              Like
            </button>
            <span id="likeCount-${post.id}" class="like-count">${post.likes || 0}</span>
          </div>
        </div>
        <div class="card-footer">
          <form class="comment-form" onsubmit="addComment(event, ${post.id})">
            <input type="text" name="comment" placeholder="Add a comment">
            <button type="submit">Submit</button>
          </form>
          <div id="comments-${post.id}" class="comments">
            <!-- Comments will be rendered here -->
          </div>
        </div>
      </div>
    </section>
  `).join('');

  renderEmptyCommentList();
}

function handleLikeButtonClick(postId) {
  const likeButton = document.getElementById(`likeButton-${postId}`);

  // Check if the post is already liked
  const isLiked = likeButton.classList.contains('liked');

  if (isLiked) {
    fetch(`/api/posts/${postId}/unlike`, {
      method: 'POST',
    })
      .then((res) => {
        if (res.ok) {
          likeButton.classList.remove('liked');
          updateLikeCount(postId, false); // Update the like count
        } else {
          throw new Error('Failed to unlike post');
        }
      })
      .catch((error) => {
        console.error('Error unliking post:', error);
      });
  } else {
    fetch(`/api/posts/${postId}/like`, {
      method: 'POST',
    })
      .then((res) => {
        if (res.ok) {
          likeButton.classList.add('liked');
          updateLikeCount(postId, true); // Update the like count
        } else {
          throw new Error('Failed to like post');
        }
      })
      .catch((error) => {
        console.error('Error liking post:', error);
      });
  }
}

// Function to update the like count dynamically
function updateLikeCount(postId, isLiked) {
  const likeCountElement = document.getElementById(`likeCount-${postId}`);
  const currentLikeCount = parseInt(likeCountElement.textContent);

  if (isLiked) {
    likeCountElement.textContent = isNaN(currentLikeCount) ? 1 : currentLikeCount + 1;
  } else {
    likeCountElement.textContent = isNaN(currentLikeCount) ? 0 : currentLikeCount - 1;
  }
}

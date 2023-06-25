function renderPostList() {
    const postListDOM = document.querySelector('#page')
  
    postListDOM.innerHTML = state.posts.map(post => `
      <section class="post" data-id="${post.post_id}">
        <header>
          <h2 onClick="renderPostInfo(${post.post_id})">${post.post_created_at}</h2>
        </header>
        <p>${post.location} ${depot.content}</p>
      </section>
  `).join('');
  renderEmptyCommentList ();
  }
  
  function renderSearch() {
    document.querySelector('#page').innerHTML = `
      <form action="" class="search-bar" onsubmit="renderSearchResult(event)">
        <input type="text" name="location" placeholder="Please search post by location...">
        <button>Search Post By Location </button>
      </form>
  
    `
    renderEmptyCommentList ();
  }
  
  function renderSearchResult(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form))
    let locationInput = data.location
    console.log(locationInputInput)
    const prefix = locationInputInput.split('').slice(0, 3).join('');
    console.log(prefix)
  
    const filteredPost = state.posts.filter(post => post.location.toString().split('').slice(0, 3).join('') === prefix);
  
    console.log(filteredPost)
    const postDOM = document.querySelector('#page')
    postDOM.innerHTML = filteredPost.map(post => `
    <section class="post" data-id='${post.post_id}'>
      <header>
        <h2 onClick="renderPostInfo(${post.post_id})" >${post.post_created_at}</h2>
      </header>
      <p>${depot.location}</p>
      <p>${depot.content}</p>
    </section>
  `).join('')
  
    renderEmptyCommentList ();
  }
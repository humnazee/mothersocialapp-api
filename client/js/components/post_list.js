// function renderPostList() {
//     const postListDOM = document.querySelector('#page')
  
//     postListDOM.innerHTML = state.posts.map(post => `
//       <section class="post" data-id="${post.post_id}">
//         <header>
//           <h2 onClick="renderPostInfo(${post.post_id})">${post.post_created_at}</h2>
//         </header>
//         <p>${post.title} ${post.content}</p>
//       </section>
//   `).join('');
//   renderEmptyCommentList ();
//   }
  
function renderPostList() {
  const postListDOM = document.querySelector('#page');

  postListDOM.innerHTML = state.posts.map(post => `
    <section class="post" data-id="${post.id}">
      <header>
        <h2 onClick="renderPostInfo(${post.id})">${post.created_at}</h2>
      </header>
      <p>${post.title} ${post.content}</p>
    </section>
  `).join('');
  
  renderEmptyCommentList();
}


  function renderSearch() {
    document.querySelector('#page').innerHTML = `
      <form action="" class="search-bar" onsubmit="renderSearchResult(event)">
        <input type="text" name="title" placeholder="Please search post by title...">
        <button>Search Post By Title </button>
      </form>
  
    `
    renderEmptyCommentList ();
  }
  
  function renderSearchResult(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    let titleInput = data.title;
    console.log(titleInput);
    const prefix = titleInput.split('').slice(0, 3).join('');
    console.log(prefix);
  
    const filteredPost = state.posts.filter(
      post => post.title.toString().split('').slice(0, 3).join('') === prefix
    );
  
    console.log(filteredPost);
    const postDOM = document.querySelector('#page');
    postDOM.innerHTML = filteredPost
      .map(post => `
        <section class="post" data-id="${post.id}">
          <header>
            <h2 onClick="renderPostInfo(${post.id})">${post.created_at}</h2>
          </header>
          <p>${post.title}</p>
          <p>${post.content}</p>
        </section>
      `)
      .join('');
  
    renderEmptyCommentList();
  }
  
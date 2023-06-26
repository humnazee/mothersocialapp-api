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
        <h2 onClick="renderPostInfo(${post.title})">${post.content}</h2>
      </header>
      <img src="${post.image_url}" alt="">
      <p>${post.created_at}</p>
      
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
    const input = document.querySelector('.search-bar input').value;
    posts = state.posts;
    const filteredPosts = posts.filter(post => post.title && post.title.toLowerCase().includes(input));
    console.log(filteredPosts);
    document.querySelector('#page').innerHTML = `
    ${filteredPosts[0].title}
  `;
  
  



  

  
}

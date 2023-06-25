const state = {
    comments: [],
    // loggedInUser: ''
}

fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
        state.loggedInUser = ({email: data.email})
        // state.userId = something
      }
  })

  fetch('/api/posts')
    .then(res => res.json())
    .then(posts => {
        state.posts = posts
        renderpostList()
        renderNav()
    })
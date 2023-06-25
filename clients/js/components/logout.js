function renderLogout() {
    document.querySelector('#page').innerHTML = `
      <section class='log-out'>
        <h3>Are you sure you want to log out?</h3>
        <button onClick="logOut()">Log out</button>
      </section>
    `;
    renderEmptyCommentList ();
  }
  
  function logOut() {
    fetch('/api/sessions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Clear-Site-Data': '"*"' }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          state.loggedInUser = null
          renderLogin()
          renderNav()
        } else {
          renderError(res.error)
        }
    })
    }
function renderSignUp() {
  console.log('I am sign up')
    document.querySelector('#page').innerHTML = `
      <section class='sign-up'>
        <form action="" onSubmit="signUp(event)">

          <fieldset>
            <label for="">Name: </label>
            <input type="text" name="name">
          </fieldset>
          <fieldset>
            <label for="">Email: </label>
            <input type="text" name="email">
          </fieldset>
          <fieldset>
            <label for="">Password: </label>
            <input type="password" name="password">
          </fieldset>
          <button>Sign Up</button>
        </form>
      </section>
    `;
    renderEmptyCommentList ();
  }


function signUp(event) {
  event.preventDefault()
  const form = event.target

  // converts form data into an object
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(email => state.loggedInUser = email)
  .then(() => renderLogin())
}
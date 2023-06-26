function renderNav() {
    if (state.loggedInUser != null) {
        document.querySelector('.header-nav').innerHTML = `
        <ul>
            <li onClick="renderLogout()">Log Out</li>
            <li onClick="renderSearch()">Search posts</li>
        </ul>`
    } else {
        document.querySelector('.header-nav').innerHTML = `
        <ul>
            <li onClick="renderSignUp()">Sign Up</li>
            <li onClick="renderLogin()">Log in</li>
            <li onClick="renderSearch()">Search posts</li>
        </ul>`
    }
}
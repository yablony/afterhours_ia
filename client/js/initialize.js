const state = {
  quotes: [],
  loggedInUser: null,
  loggedInUserId: null
};

// in order to log out also need to destory cookie/loggedInUser
fetch('/api/sessions')
  .then(res => res.json())
  .then(data => {
    if (data.result === 'successful') {
      state.loggedInUser = data.email
      state.loggedInUserId = data.userId
      let welcomeDOM = document.querySelector('#welcome')
      welcomeDOM.textContent = `Welcome ${state.loggedInUser}`
    }
});

fetch('/api/quotes')
  .then(res => res.json())
  .then(quotes => {
    state.quotes = quotes
    renderCompliment()
    renderNavBar()
});

function renderLogout(event) {
  event.preventDefault()
  fetch('/api/sessions', {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(res => {
      if (res.message === 'successful') {
        let welcomeDOM = document.querySelector('#welcome')
        welcomeDOM.textContent = 'Welcome'
        state.loggedInUser = null
        renderCompliment()
        renderNavBar()
      }
    })
};

function renderNavBar() {
  if (state.loggedInUser === null) {
    document.querySelector('#navbar').innerHTML = `
      <li onClick="renderSignUp()">Sign Up</li>
      <li onClick="renderLogin()">Log In</li>
      <li onClick="renderCompliment()">Emergency Compliment</li>
    `
  } else {
    document.querySelector('#navbar').innerHTML = `
      <li onClick="renderQuestionForm()">Ask IA</li>
      <li onClick="renderQuoteList()">My Quotes</li>
      <li onClick="renderCompliment()">Emergency Compliment</li>
      <li onClick="renderLogout(event)">Log Out</li>
    `
  }
};


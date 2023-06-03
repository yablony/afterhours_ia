const state = {
  quotes: []
}

fetch('/api/quotes')
  .then(res => res.json())
  .then(quotes => {
    state.quotes = quotes
    renderQuestionForm()
  })
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
  })

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
      }
    })
}



const state = {
  quotes: []
}

fetch('/api/quotes')
  .then(res => res.json())
  .then(quotes => {
    state.quotes = quotes
    renderQuestionForm()
  })
// in order to log out alos need to destory cookie/loggedInUser
fetch('/api/sessions')
  .then(res => res.json())
  .then(data => {
    if (data.result === 'successful') {
      state.loggedInUser = data.email
      const welcomeDOM = document.querySelector('#welcome')
      welcomeDOM.textContent = `Welcome ${state.loggedInUser}`
    }
  })

function renderLogout(event) {
  event.preventDefault()
    fetch('/api/sessions/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' } 
    })
    .then(response => {
      if (response.ok) {
        state.loggedInUser = []
        window.location.href = '/'
      } else {
        console.log('logout failed')
      }
    })  
}



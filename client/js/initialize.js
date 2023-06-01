const state = {
  quotes: []
}

fetch('/api/quotes')
  .then(res => res.json())
  .then(quotes => {
    state.quotes = quotes
    renderQuote()
  })

// fetch('/api/sessions')
//   .then(res => res.json())
//   .then(data => {
//     if (data.result === 'successful') {
//       state.loggedInUser = data.email
//     }
//   })
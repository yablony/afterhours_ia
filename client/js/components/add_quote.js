
function createQuote(event) {
  event.preventDefault()
  const form = event.target

  // converts form data into an object
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/quotes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(quote => {
      state.quotes.push(quote)
      renderQuoteList()
    })
}
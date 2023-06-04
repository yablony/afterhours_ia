function renderUpdateQuote(event) {
  const updateBtn = event.target
  const quoteDOM = updateBtn.closest('.quote')
  const quoteId = quoteDOM.dataset.id
  const quoteArray = state.quotes.filter(quote => quote.id == quoteId)
  const quoteText = quoteArray[0].quote
  const name = quoteArray[0].name

  document.querySelector('#page').innerHTML = `
    <section class="update-quote" data-id="${quoteId}">
      <form action="" onSubmit="updateQuote(event)" class="update-quote-form">
        <input type="hidden" name="id" value=${quoteId}>
        <input type="hidden" name="email" value=${state.loggedInUser}>
        <input type="hidden" name="name" value=${name}>
        <h2>${name} once said: </h2>
        <fieldset>
          <input type="text" name="quote" value="${quoteText}">
        </fieldset>
        <button>Update Quote</button>
      </form>
    </section>
  `
}

// need to change method to PUT
// provide name
function updateQuote(event) {
  event.preventDefault()
  const form = event.target

  // converts form data into an object
  const data = Object.fromEntries(new FormData(form))
  console.log("DATA:", data)

  fetch('/api/quotes', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(quote => {
      console.log("UPDATED QUOTE", quote)
      state.quotes = state.quotes.filter(q => q.id != quote.id)
      state.quotes.push(quote)
      renderQuoteList()
    })
}
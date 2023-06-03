// changes the html on the page
function renderQuoteList() {
  document.querySelector('#page').innerHTML = `
  <section class="add-quote">
    ${renderMyQuotes()}
  </section>
  `
}

// renders a form with a dropdown box to select an IA and an input field so users can provide a quote
function renderAddQuoteForm() {
  document.querySelector('#page').innerHTML = `
  <section class="add-quote">
    <form action="" onSubmit="addQuote(event)" class="new-quote-form">
      <input type="hidden" name="email" value=${state.loggedInUser}>
      <fieldset>
        <select id="ia" name="name">
          <option value="Neil">Neil</option>
          <option value="Kasun">Kasun</option>
          <option value="Jordan">Jordan</option>
          <option value="Bree">Bree</option>
        </select>
      </fieldset>
      <fieldset>
        <label for="">Quote: </label>
        <input type="text" name="quote">
      </fieldset>
      <button>Add Quote</button>
    </form>
  </section>
`
}

function addQuote(event) {
  event.preventDefault()
  const form = event.target

  // converts form data into an object
  const data = Object.fromEntries(new FormData(form))
  console.log(data)

  fetch('/api/quotes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(quote => {
      console.log(`this is line 40 console log ${quote}`)
      // prints as [object object]
      state.userQuote.push(quote)
      renderMyQuotes()
    })
}


// the maybe function works, just need a nav button that runs it. Haven't tested fully
function renderMyQuotes() {
  // need a function to filter through the id's of the users
  // we need to find the id using email
  const userQuotes = state.quotes.filter(quote => quote.user_id == state.loggedInUserId)
  console.log(userQuotes)
  return userQuotes.map(quote => `
   <section class=user-quotes" data-id='${quote.id}'>
     <header>
       <h2>${quote.name}</h2>
       <span class="material-symbols-outlined delete" onClick="deleteQuote(event)">delete</span>
      </header>
      <p>${quote.quote}</p>
    </section>
    `).join('')
}
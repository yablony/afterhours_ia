// renders a form with a dropdown box to select an IA and an input field so users can provide a quote
function renderAddQuoteForm() {
  document.querySelector('#id').innerHTML = `
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
  const form = event.target;

  // converts form data into an object
  const data = Object.fromEntries(new FormData(form));

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
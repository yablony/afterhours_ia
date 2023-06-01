function renderAddQuote() {
  document.querySelector('#page').innerHTML = `
    <section class='create-quote'>
      <form action="" onSubmit="createQuote(event)">
        <h2>Add Quote</h2>
        <fieldset>
          <select id="ia" name="ia">
            <option value="neil">Neil</option>
            <option value="kasun">Kasun</option>
            <option value="jordan">Jordan</option>
            <option value="bree">Bree</option>
          </select>
        </fieldset>
        <fieldset>
          <label for="">Quote: </label>
          <textarea name="quote" id="" cols="30" rows="10"></textarea>
        </fieldset>
        <button>Add Quote</button>
      </form>
    </section>
  `
}

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
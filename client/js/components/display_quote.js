function renderQuote() {
  document.querySelector('#page').innerHTML = `
  <section class="display_quote">
  ${displayQuotes}
  </section>
  `
}

function displayQuotes() {
  return state.quotes.map(quote => `
  <section class="quote" data-id="${quote.id}">
  <header>
  <h2>${quote.quote}</h2>
  <span class="material-symbols-outlined delete" onClick="deleteQuote(event)">delete</span>
  </header>
  
  </section>
  `)

}
// changes the html on the page
function renderQuoteList() {
  document.querySelector('#page').innerHTML = `
  <p onClick="renderAddQuoteForm()">Add New Quote!</p>
  <section class="quote-list">
    ${renderMyQuotes()}
  </section>
  `
};

function renderMyQuotes() {
  const userQuotes = state.quotes.filter(quote => quote.user_id == state.loggedInUserId);
  return userQuotes.map(quote => `
   <section class="quote" data-id='${quote.id}'>
     <header>
       <h2>${quote.name}</h2>
       <span class="material-symbols-outlined update" onClick="renderUpdateQuote(event)">update</span>
       <span class="material-symbols-outlined delete" onClick="deleteQuote(event)">delete</span>
      </header>
      <p>${quote.quote}</p>
    </section>
    `).join('')
};

function deleteQuote(event) {
  const deleteBtn = event.target;
  const quoteDOM = deleteBtn.closest('.quote');
  const quoteId = quoteDOM.dataset.id;
  fetch(`/api/quotes/${quoteId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.quotes = state.quotes.filter(q => q.id != quoteId)
      renderQuoteList()
    })
};
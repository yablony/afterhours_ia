function renderCompliment() {
  document.querySelector('#page').innerHTML = `
  <section class="display_compliment">
  ${displayCompliments}
  </section>
  `
}

function displayCompliments() {
  return state.quotes.map(compliment => `
  <section class="compliment" data-id="${compliment.id}">
  <header>
  <h2>${compliment.compliment}</h2>
  <span class="material-symbols-outlined delete" onClick="deleteCompliment(event)">delete</span>
  </header>
  
  </section>
  `)

}
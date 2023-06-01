// this puts the quote section on the html page
function displayQuote() {
  document.querySelector('#page').innerHTML = `
  <section class="display_quote">
  ${renderQuote()}
  </section>
  `
}

// this adds the quote section inside the above section
function renderQuote() {
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
// this puts the ask question from the IA on the page
function renderDisplayQuote() {
  document.querySelector('#page').innerHTML = `
  <section class='create-quote'>
    <form action="" onSubmit="findQuote(event)">
      <h2>Ask your question!</h2>
      <fieldset>
        <label for="">Select your IA: </label>
        <select id="ia" name="ia">
        <option value="neil">Anyone</option>
          <option value="neil">Neil</option>
          <option value="kasun">Kasun</option>
          <option value="jordan">Jordan</option>
          <option value="bree">Bree</option>
        </select>
      </fieldset>
      <fieldset>
        <label for="">Your Question: </label>
        <textarea name="question" id="" rows="1"></textarea>
    </fieldset>
      <fieldset>
        <p id="quote-answer">Quote: </p>
      </fieldset>
      <button>Ask Question</button>
    </form>
  </section>
  `;
}

// this functions displays the quote when the form is submittied
function findQuote(event) {
  event.preventDefault();
  const form = event.target;

  
}
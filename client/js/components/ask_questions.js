// const { name } = require("ejs");

// this puts the ask question from the IA on the page
function renderQuestionForm() {
  document.querySelector('#page').innerHTML = `
  <section class='ask-question'>
    <form action="" onSubmit="findQuote(event)">
      <h2>Ask your question!</h2>
      <fieldset>
        <label for="">Select your IA: </label>
        <select id="ia" name="ia">
          <option value="Anyone">Anyone</option>
          <option value="Neil">Neil</option>
          <option value="Kasun">Kasun</option>
          <option value="Jordan">Jordan</option>
          <option value="Bree">Bree</option>
        </select>
      </fieldset>
      <fieldset class="question">
        <label for="">Your Question: </label>
        <textarea name="question" id="" rows="1"></textarea>
    </fieldset>
      <fieldset>
        <p id="quote-answer">Quote: </p>
      </fieldset>
      <button class="btn btn-success">Ask Question</button>
    </form>
    <div class="kasunSurprise"></div>
  </section>
  `;
}

function findIA(event) {
  event.preventDefault();

  const nameSelection = document.querySelector('#ia-guess');
  const quoteAnswer = document.querySelector('#quote-answer').textContent.slice(7);
  const quoteAnswerObject = state.quotes.filter(quoteObject => quoteObject.quote === quoteAnswer);
  const guessResult = document.querySelector('#guess-result');

  if (nameSelection.value === quoteAnswerObject[0].name) {
    guessResult.textContent = "Legend, you guessed correctly! - Neil approves";
  } else {
    guessResult.textContent = "That's wrong! You should know your IAs better...";
  }
}

// this functions displays the quote when the form is submittied
function findQuote(event) {
  event.preventDefault();
  const iaSelector = document.querySelector('#ia');
  const askIADOM = document.querySelector('.ask-question');
  const guessFormSection = document.createElement('section');
  guessFormSection.classList.add('guess-ia-section');

  // gets rid of the guess result text when the user clicks the 'Ask Question' button while the select is set to 'Anyone'
  if (document.querySelector("#guess-result")) {
    document.querySelector("#guess-result").textContent = '';
  }

  if (iaSelector.value === 'Anyone') {
    if (!document.querySelector('#guess-ia')) {
      guessFormSection.innerHTML = `
      <form id="guess-ia" action="" onSubmit="findIA(event)">
        <fieldset>
          <label for="">Guess who said this: </label>
          <select id="ia-guess" name="ia-guess">
            <option value="Neil">Neil</option>
            <option value="Kasun">Kasun</option>
            <option value="Jordan">Jordan</option>
            <option value="Bree">Bree</option>
          </select>
        </fieldset>
        <p id="guess-result"></p>
        <button class="btn btn-success">Submit Guess</button>
      </form>
     
      `
      askIADOM.appendChild(guessFormSection);
    }

    const quotes = state.quotes.map(quoteObject => quoteObject.quote);
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const quoteDOM = document.querySelector('#quote-answer');

    quoteDOM.textContent = `Quote: ${quotes[randomQuoteIndex]}`;
  } else {
    const selectedIaObjects = state.quotes.filter(iaObject => iaObject.name === iaSelector.value);
    const quotesOfAnIa = selectedIaObjects.map(quoteIaObject => quoteIaObject.quote);
    const randomQuoteIndex = Math.floor(Math.random() * quotesOfAnIa.length);
    const quoteDOM = document.querySelector('#quote-answer');

    quoteDOM.textContent = `Quote: ${quotesOfAnIa[randomQuoteIndex]}`;
  }
  
  if (iaSelector.value === 'Kasun') {
    document.querySelector('.kasunSurprise').classList.add('kasun'); // Add 'kasun' class to body
  } else {
    document.querySelector('.kasunSurprise').classList.remove('kasun'); // Remove 'kasun' class from body
  }

  // removes the guessing form if the name of the IA is selected instead of 'Anyone'
  iaSelector.addEventListener('change', () => {
    guessFormSection.innerHTML = '';
  });
}
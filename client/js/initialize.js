const state = {
  quotes: [],
  loggedInUser: null
}

fetch('/api/quotes')
  .then(res => res.json())
  .then(quotes => {
    state.quotes = quotes
    renderQuestionForm()
    renderNavBar()
  })
// in order to log out also need to destory cookie/loggedInUser
fetch('/api/sessions')
  .then(res => res.json())
  .then(data => {
    if (data.result === 'successful') {
      state.loggedInUser = data.email
      state.loggedInUserId = data.userId
      let welcomeDOM = document.querySelector('#welcome')
      welcomeDOM.textContent = `Welcome ${state.loggedInUser}`
    }
  })

function renderLogout(event) {
  event.preventDefault()
  fetch('/api/sessions', {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(res => {
      if (res.message === 'successful') {
        let welcomeDOM = document.querySelector('#welcome')
        welcomeDOM.textContent = 'Welcome'
        state.loggedInUser = null
        renderCompliment()
        renderNavBar()
      }
    })
}

// function checkLoggedIn() {
//   return fetch('/api/sessions')
//     .then(res => res.json())
//     .then(data => {
//       const { email, userId } = data;
//       if (email && userId) {
//         return { email, userId }
        
//       }
//       return null
//     })
//   }


function renderNavBar() {
if (state.loggedInUser === null) {
  document.querySelector('#navbar').innerHTML = `
    <li class="material-symbols-outlined sign-up" onClick="renderSignUp()">Sign Up</li>
    <li class="material-symbols-outlined login" onClick="renderLogin()">Log In</li>
    <li class="material-symbols-outlined add-treasure" onClick="renderCompliment()">Emergency Compliment</li>
  `
} else {
  document.querySelector('#navbar').innerHTML = `
    <li class="material-symbols-outlined add-treasure" onClick="renderQuestionForm()">Ask IA</li>
    <li class="material-symbols-outlined edit-treasure" onClick="renderQuoteList()">My Quotes</li>
    <li class="material-symbols-outlined add-treasure" onClick="renderCompliment()">Emergency Compliment</li>
    <li class="material-symbols-outlined logout" onClick="renderLogout(event)">Log Out</li>
  `
}
}
renderNavBar()

  // const navBar = document.getElementById('navbar');
  // navBar.innerHTML = '';

  // const navElement = document.createElement('nav');
  // navElement.classList.add('header-nav');

  // const ulElement = document.createElement('ul');

  // const askIaElement = document.createElement('li');
  // askIaElement.classList.add("material-symbols-outlined ask-quote");
  // askIaElement.onclick = "renderQuestionForm()"
  // askIaElement.textContent = "Ask IA"

  // const myQuoteElement = document.createElement('li')
  // myQuoteElement.classList.add("material-symbols-outlined my-quotes")
  // myQuoteElement.onclick = "renderQuoteList()"
  // myQuoteElement.textContent = "My Quotes"

  // const loginElement = document.createElement('li')
  // loginElement.classList.add("material-symbols-outlined login")
  // myQuoteElement.onclick = "renderLogin()"
  // myQuoteElement.textContent = "Log In"

  // const complimentElement = document.createElement('li')
  // complimentElement.classList.add("material-symbols-outlined render-compliment")
  // complimentElement.onclick = "renderCompliment()"
  // complimentElement.textContent = "Emergency Compliment"




//   // if no one is logged in; NavBar should only display these items
//   if (state.loggedInUser === null) {
    
//   } else { // if user is logged in NavBar should display these items;
//     ulElement.appendChild(askIaElement)

//   }
//   //

// }


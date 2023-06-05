// line 2 through 31 are the sign up form, might want to add password confirmation later. signUp
function renderSignUp() {
    document.querySelector("#page").innerHTML = `
    <section class='sign-up'>
        <form action="" onSubmit="signUp(event)" id="signupForm">
            <h2>Sign Up</h2>
            <fieldset>
               <label for="">First Name: </label>
               <input type="text" name="first_name">
            </fieldset>    
            <fieldset>
                <label for="">Last Name: </label>
                <input type="text" name="last_name">
            </fieldset>
            <fieldset>
                <label for="">Email: </label>
                <input type="text" name="email">
            </fieldset>
            <fieldset>
               <label for="">Username: </label>
               <input type="text" name="username">
            </fieldset>
            <fieldset>
                <label for="">Password: </label>
                <input type="password" name="password">
            </fieldset>
            <button class="btn btn-success">Sign Up</button>
        </form>
   </section>
   `;
};

function signUp(event) {
    event.preventDefault();
    const form = event.target;

    // converts form data into an object
    const data = Object.fromEntries(new FormData(form));

    fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then(() => renderLogin());
};

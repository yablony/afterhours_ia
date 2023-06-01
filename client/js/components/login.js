function renderLogin() {
    document.querySelector('#page').innerHTML = `
    <section class='log-in'>
        <form action ="" onSubmit="logIn(event)">
           <h2>Log In</h2>
           <fieldset>
             <label for="">Email: </label>
             <input type="text" name="email">
           </fieldset>
           <fieldset>
             <label for="">Password: </label>
             <input type="password" name="password">
            </fieldset>
            <button>Log In</button>
        </form>
    </section>
    `
}
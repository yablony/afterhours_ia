const express = require('express');

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const quotesController = require('./controllers/quotes_controller')
const usersController = require('./controllers/users_controller')
const sessionsContoller = require('./controllers/sessions_controller')


const app = express();

const port = 3000;

// starting the web server
app.listen(port, () => console.log(`listening on http://localhost:${port}`));


app.use(logger) 
app.use(express.static('client')) 
app.use(express.json()) // middleware to parse JSON body in a POST, PUT, or DELETE request, and it assigns the data to req.body
app.use(sessions) 

// this works like url prefix in flask // when we pass on two arguments, it's smart enough to understand that the first argument is a route and the second one is a middleware route function
app.use('/api/quotes', quotesController) 
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsContoller)
// app.use('/api/sessions/delete', sessionsContoller)

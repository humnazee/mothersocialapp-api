const express = require('express');
require('dotenv').config();
const path = require('path');
// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const postsController = require('./controllers/posts_controller')
const usersConstroller = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const commentsController = require('./controllers/comments_controller')


const app = express()
const port = process.env.PORT || 4000;

// start the web server
app.listen(port, () => console.log(`listening on http://localhost:${port}`))



// middleware to send back our SPA (Single-Page Application)
app.use(sessions);
app.use(express.static('client'));
app.use(express.json());


// middleware function to log request info in the terminal
// Middleware function to log request info in the terminal
app.use(logger);

// Render index.html when accessing the root domain
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
app.use('/api/posts', postsController)
app.use('/api/comments', commentsController)
app.use('/api/sessions', sessionsController)
app.use('/api/users', usersConstroller)

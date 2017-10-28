const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

// app.use('/routes', routes.function);
// app.use(/middleware, middleware.function);

app.use('/', routes.auth);

module.exports = app;

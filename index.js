const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const routes = require('./routes/index');

const api = require('./routes/api');

const config = require('./config');
const Data = require('./config/data');

const utils = require('./api/utils');

// const setUpPassport = require('./setuppassport');

const app = express();


app.disable('x-powered-by');

app.set('port', config.port);
app.set('sport', config.sport);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.normalizedate = utils.normalizedate;

app.use(morgan('short'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'Mkdixidk=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());


app.use('/', routes);
app.use('/api', api);

app.use(function(req, res) { res.status(404); res.render('404', { errorImg: Data.errorImg }); });

process.on("uncaughtException", (err) => console.trace(err));

app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}.`);
});



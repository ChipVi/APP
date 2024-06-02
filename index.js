const path = require('path');
const express = require('express');
const app = express();
const route = require('./route/index.js');
const bodyParser = require ('body-parser');
const methodOverride = require('method-override');
// HANDLEBARS SETUP
const { engine } = require('express-handlebars');
app.engine('handlebars', engine({
    extname: '.handlebars',
    defaultLayout: 'main' 
})); 
app.set('view engine', 'handlebars');
// app.set('views',  path.join(__dirname,'../views'));
app.set('views',  path.join(__dirname,'./views'));
// either :
    // from here, include the path from this dir, then back off 1 dir (../views)
    // or: move views folder into src folder, then path.join(__dirname,'views')

// DATABASE
const db = require ('./config/db/index.js');
// Connect to DB 
db.connect(); 

// SET UP MIDDLEWARE TO PARSE POST REQUEST

app.use(bodyParser.json()); 
// BODYPARSER MIDDLEWARE helps parse incoming request data into objects
app.use(express.json());


// When the form is submitted, the data is sent to the server as a URL-encoded string. The server, using express.urlencoded({ extended: true }), will parse this data and make it available in req.body.
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })) 
// MET MOI QUA

app.use(express.static(path.join(__dirname, 'public'))); 

route(app);

app.listen(3000); 

/**
 * Module dependencies.
 */

var express = require('express');
<<<<<<< HEAD
var app = express();
var hbs = require('express-hbs');
var http = require('http');
var fs = require('fs');
var path = require('path');
var viewsDir = __dirname + '/views';


// all environments
app.set('port', process.env.PORT || 3000);
=======
var exphbs = require('express3-handlebars');
// var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
>>>>>>> 6a49db3e6f8114a5b89cca94097b92a2c156abbb
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
<<<<<<< HEAD
app.use(express.static(__dirname + '/public'));

// Hook in express-hbs and tell it where known directories reside
app.engine('hbs', hbs.express3({
  partialsDir: [__dirname + '/views/partials', __dirname + '/views/partials-other'],
  layoutsDir: __dirname + '/views/layout',
  defaultLayout: __dirname + '/views/layout/default.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Register sync helper
hbs.registerHelper('link', function(text, options) {
  var attrs = [];
  for (var prop in options.hash) {
    attrs.push(prop + '="' + options.hash[prop] + '"');
  }
  return new hbs.SafeString("<a " + attrs.join(" ") + ">" + text + "</a>");
});

// Register Async helpers
hbs.registerAsyncHelper('readFile', function(filename, cb) {
  fs.readFile(path.join(viewsDir, filename), 'utf8', function(err, content) {
    cb(new hbs.SafeString(content));
  });
});

var fruits = [
  {name: 'apple'},
  {name: 'orange'},
  {name: 'pear'}
];

var veggies = [
  {name: 'asparagus'},
  {name: 'carrot'},
  {name: 'spinach'}
];

app.get('/', function(req, res) {
  res.render('index', {
  title: 'express-hbs example'
  });
});

app.get('/fruits', function(req, res) {
  res.render('fruits/index-layoutsDir', {
    title: 'My favorite fruits',
    fruits: fruits
  });
});

app.get('/fruits/:name', function(req, res) {
  res.render('fruits/details-layoutsDir', {
    fruit: req.params.name
  })
});

app.get('/veggies', function(req, res) {
  res.render('veggies', {
    title: 'My favorite veggies',
    veggies: veggies,
    layout: 'veggie'
  });
});

app.get('/veggies/explicit-dir', function(req, res) {
  res.render('veggies', {
    title: 'My favorite veggies',
    veggies: veggies,
    layout: __dirname + '/views/layout/veggie'
  });
});

app.get('/veggies/:name', function(req, res) {
  res.render('veggies/details', {
    veggie: req.params.name,
    layout: 'veggie-details'
  })
});



=======
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> 6a49db3e6f8114a5b89cca94097b92a2c156abbb

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

<<<<<<< HEAD
=======
app.get('/', function (req, res) {
    res.render('home');
});

>>>>>>> 6a49db3e6f8114a5b89cca94097b92a2c156abbb
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

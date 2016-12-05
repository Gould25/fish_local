var express = require('express');
var engine = require('ejs-locals');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
//var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var routes = require('./routes/index');
var fish = require('./routes/fish');
var alias = require('./routes/alias');
var family = require('./routes/family');
var users = require('./routes/users');
var records = require('./routes/records');
var fishlog = require('./routes/fishlog');
var locations = require('./routes/locations');
var baits = require('./routes/baits');
var artificial = require('./routes/artificial');
var natural = require('./routes/natural');
var addfish = require('./routes/addfish');
var addlocation = require('./routes/addlocation');
var addrecord = require('./routes/addrecord');
var addfishlog = require('./routes/addfishlog');
var addbait = require('./routes/addbait');
var insert_message = require('./routes/insert_message');
var insert_error = require('./routes/insert_error');


var app = express();
app.engine('ejs', engine);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.use(upload.array());

app.use('/', routes);
app.use('/fish', fish);
app.use('/alias', alias);
app.use('/family', family);
app.use('/users', users);
app.use('/records', records);
app.use('/fishlog', fishlog);
app.use('/locations', locations);
app.use('/baits', baits);
app.use('/artificial', artificial);
app.use('/natural', natural);
app.use('/addfish', addfish);
app.use('/addlocation', addlocation);
app.use('/addrecord', addrecord);
app.use('/addfishlog', addfishlog);
app.use('/addbait', addbait);
app.use('/insert_message', insert_message);
app.use('/insert_error', insert_error);

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/knockout', express.static(__dirname + '/node_modules/knockout/build/output/'));


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

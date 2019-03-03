var express 	= require('express');
var app   		= express();
var morgan  	= require('morgan');
var bodyParser 	= require('body-parser');
var cookieParser= require('cookie-parser');
var path      = require('path');
// var session 	= require('express-session');
var port 		= process.env.PORT || 3000;
var mongoose 	= require('mongoose');
// var passport 	= require('passport');
// var flash 		= require('connect-flash');
var cors 		= require('cors');
var http 		= require('http');
var server 		= http.createServer(app);
// var io 			= require('socket.io').listen(server);
// var User 		= require('./app/models/user');
// var config 		= require('./config/keys.js');
// var cognitiveServicesKey=config.cognitiveServices.key;

app.use(express.static(path.join(__dirname, 'dist/FeelBros')));
app.use('/static', express.static(path.join(__dirname, 'server/public')))
app.use(cors());
var configDB = require('./server/config/database.js');

// mongoose.connect(configDB.url);

// require('./config/passport')(passport);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

// app.set('view engine','ejs');

// app.use(session({
// 		secret: config.sessions.key,
// 		saveUninitialized: true,
// 		resave: true
// 	}));

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

const routes = require('./server/routes/app.js');
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/FeelBros/index.html'));
});
// require('./routes/app.js')(app,passport,io);

//########################################################################################################################
server.listen(port);
console.log('ContentHolmes app running on port ' + port);

var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var path = require('path')
var cookieSession = require('cookie-session')

var app = express();

require('./app/config/app')(app)

var urlEncodedParser = bodyParser.urlencoded({extended: false})

//setting
app.set('trust proxy', 1)
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use('/publics/', express.static(__dirname + '/publics/'));

app.use(urlEncodedParser)
app.use(multer({
  dest: __dirname+'/publics/upload/temp'
}).any());

//routes
app.use('/', require('./routes/index'))
app.use('/blog', require('./routes/blog'))
app.use('/user', require('./routes/user'))


var server = app.listen(app.locals.port, function () {
  var host = server.address().address
  var port = server.address().port
    host = '127.0.0.1'
    port = app.locals.port
  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)
})
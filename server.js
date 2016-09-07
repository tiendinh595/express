var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var fs = require("fs");
var path = require('path')
var engine = require('ejs-locals')
var cookieSession = require('cookie-session')

var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended: false})

app.locals.base_url = "http://127.0.0.1:1000"

//setting
app.set('trust proxy', 1)
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
//app.engine('ejs', engine);

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

var server = app.listen(1000, function () {
  var host = server.address().address
  var port = server.address().port
    host = '127.0.0.1'
    port = 1000
  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)
})
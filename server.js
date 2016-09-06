var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var fs = require("fs");
var path = require('path')
var engine = require('ejs-locals')

var routes = require('./routes/index')
var blog = require('./routes/blog')

var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended: false})

//setting
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
//app.engine('ejs', engine);

app.use('/publics/', express.static(__dirname + '/publics/'));

app.use(urlEncodedParser)
app.use(multer({
  dest: __dirname+'/publics/upload/temp'
}).any());

//routes
app.use('/', routes)
app.use('/blog', blog)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
    host = '127.0.0.1'
    port = 3000
  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)
})
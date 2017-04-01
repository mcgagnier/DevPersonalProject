var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('session');
var massive = require('massive');
var connectionString = "postgres://gagnier@localhost/itri";



var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'))

app.listen('8686', function(){
  console.log("Successfully listening on : 8686")
})

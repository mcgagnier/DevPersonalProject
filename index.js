var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('session');
var massive = require('massive');
var connectionString = "postgres://gagnier@localhost/itri";
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;

passport.use(new Strategy(
  function(username, password, cb) {
    var found = users.filter((user) => user.username === username);
    if (found.length === 1) {
        var user = found[0];
        if (user.password === password) return cb(null, user);
        else return cb(null, false);
    } else {
        return cb(null,false);
    }
}));

  var users = [{
      username: 'mcgagnier',
      password: 'kleinguy',
      name: 'Chris Gagnier',
      image: "../images/me.jpg",
      desc: "I'm just a guy training for my first tri",
      id: 1111,
      age: 49

  }, {
      username: 'tracierey',
      passworld: 'gingerberry',
      name: 'Tracie Gagnier',
      image: "./images/tracie.jpg",
      desc: "I'm just a girl training for my first half-marathon",
      id: 1112,
      age: 51

  },{
      username: 'slaymaker',
      password: '0127953jrol',
      name: 'Dyllon Gagnier',
      image: "./images/dyllonR.jpg",
      desc: "I'm just a dude training for my first duathalon",
      id: 1113,
      age: 22

  },{
      username: 'The Pudd',
      password: 'serveme',
      name: 'Puddie',
      image: "./images/Puddie.jpg",
      desc: "I'm just a cat training for a really long nap",
      id: 1113,
      age: 15

  },{
      username: 'Dolly',
      name: 'Molly',
      password: 'nanna',
      image: "./images/Molly.jpg",
      desc: "I'm just a dog training for my favorite treats",
      id: 1113,
      age: 3

  }]

var workouts = [{
      username: 'mcgagnier',
      code: 'Run',
      date: "3/26/17",
      distance: "6.1",
      time: 66,
      desc: "Great training run"

  },{
      username: 'mcgagnier',
      code: 'Bike',
      date: "3/25/17",
      distance: "11.38",
      time: 44,
      desc: "Great training ride"


  },{
      username: 'mcgagnier',
      code: 'Run',
      date: "3/23/17",
      distance: "3",
      time: 27,
      desc: "Nice short run"


  },{
      username: 'mcgagnier',
      code: 'Bike',
      date: "3/22/17",
      distance: "8.4",
      time: 31,
      desc: "Commute home from work"


  },{
      username: 'mcgagnier',
      code: 'Run',
      date: "3/20/17",
      distance: "4.3",
      time: 37.5,
      desc: "Morning run"


  },{
      username: 'mcgagnier',
      code: 'Swim',
      date: "3/25/17",
      distance: "625",
      time: 38,
      desc: "Saturday afternoon in the pool"
  },

  {
      username: 'mcgagnier',
      code: 'Run',
      date: "3/26/17",
      distance: "6.1",
      time: 66,
      desc: "Great training run"

  },{
      username: 'mcgagnier',
      code: 'Bike',
      date: "3/25/17",
      distance: "11.38",
      time: 44,
      desc: "Great training ride"


  },{
      username: 'mcgagnier',
      code: 'Run',
      date: "3/23/17",
      distance: "3",
      time: 27,
      desc: "Nice short run"


  },{
      username: 'mcgagnier',
      code: 'Bike',
      date: "3/22/17",
      distance: "8.4",
      time: 31,
      desc: "Commute home from work"


  },{
      username: 'mcgagnier',
      code: 'Run',
      date: "3/20/17",
      distance: "4.3",
      time: 37.5,
      desc: "Morning run"


  },{
      username: 'mcgagnier',
      code: 'Swim',
      date: "3/25/17",
      distance: "625",
      time: 38,
      desc: "Saturday afternoon in the pool"
  }]


 var app = express();


// app.use(express.logger());


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'))

app.listen('8686', function(){
  console.log("Successfully listening on : 8686")
})

app.get('/api/user',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json(req.user);
  });

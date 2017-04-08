var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var massive = require('massive');
var connectionString = "postgres://gagnier@localhost/itri";
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;
var WorkoutsCtrl = require('./controllers/WorkoutsCtrl');
var connectionString = "postgres://gagnier@localhost/itri";
var massiveInstance = massive.connectSync({connectionString : connectionString})




var app = module.exports = express();


// app.use(express.logger());
app.set('db', massiveInstance)
var db = app.get('db');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'))

app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());

app.listen('8686', function(){
  console.log("Successfully listening on : 8686")
})

app.get('/api/user',
  passport.authenticate('basic', { session: false }),
  function(req, res) {

    req.session.user = req.user;
    
    res.json(req.user);
  });

  passport.use(new Strategy(
    function(username, password, cb) {
        db.select_user([username, password], (err, res) => {
            if (err || res.length === 0) return cb(null, false);
            else {
                var user = res[0];
                return cb(null, {
                    username: username,
                    name: user.name,
                    image: user.photo,
                    desc: user.bio,
                    age: user.age
                });
            }
        });

  }));

  app.get("/api/workouts", WorkoutsCtrl.getWorkouts(app));
  app.post("/api/workouts", WorkoutsCtrl.createWorkout(app));

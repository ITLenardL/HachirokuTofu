const router = require("express").Router()
const passport = require("passport")
var LocalStrategy = require('passport-local').Strategy;
const { User, Event } = require("../models")


passport.use(new LocalStrategy(
  function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Unknown User' });
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      });
    });
  }
));


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

// Register User
router.post('/api/register', function (req, res) {
  var newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    username: req.body.username
  });

  User.createUser(newUser, function (err, user) {
    if (err) throw err;
    res.send(user).end()
  });

});


// Endpoint to login
router.post('/api/login',
  passport.authenticate('local'),
  function (req, res) {
    console.log("user", req.user)
    res.json(req.user)
  }
);

router.get("/api/allusers", function (req, res) {
  User.find().then(function (results) {
    res.json(results)
  })
})

// Endpoint to get current user
router.get('/api/user', function (req, res) {
  res.send(req.user);
})


// Endpoint to logout
router.get('/api/logout', function (req, res) {
  req.logout();
  res.send(null)
});

// Create Event
router.post('/api/newEvent', function (req, res) {
  var newEvent = new Event({
    eventName: req.body.eventName,
    eventStartTime: req.body.eventStartTime,
    eventEndTime: req.body.eventEndTime,
    eventDate: req.body.eventDate
  });

  Event.createEvent(newEvent, function (err, event) {
    if (err) throw err;
    res.send(event).end()
  });

});

// Endpoint to get current event
router.get("/api/allevents", function (req, res) {
  Event.find().then(function (results) {
    res.json(results)
  })
})


module.exports = router
const express = require("express");
const app = express();
var session = require('express-session');
var MemoryStore = require('memorystore')(session)
var passport = require('passport');



// Express Session
app.use(session({
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  resave: false,
  secret: 'keyboard cat'
}))

// Passport init
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3001;
const mongoose = require("mongoose");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(require("./routes/API"))
app.listen(port, function () {
  console.log("app online", port)
})
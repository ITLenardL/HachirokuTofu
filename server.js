const express = require("express");
const app = express();

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

app.use(require("./routes"))
app.listen(port, function () {
  console.log("app online", port)
})
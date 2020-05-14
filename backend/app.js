const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const indexRouter = require('./routes/index.js')
const fridgeRouter = require('./routes/fridge');
const shoppingListRouter = require('./routes/shoppinglist');
require('dotenv').config()

//MONGOOSE
const mongoose = require("mongoose");
mongoose.pluralize(null);

mongoose.connect("mongodb://localhost/fridgeitems", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connections;
db.concat("error", console.error.bind(console, "Error with MongoDB: "));

//EXPRESS CONTROLS
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//ROUTER
app.use('/', indexRouter)
app.use('/fridge', fridgeRouter);
app.use('/shoppinglist', shoppingListRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('PORT 3001');
});

module.exports = app;
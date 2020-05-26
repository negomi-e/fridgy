const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;



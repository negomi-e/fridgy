const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user:8905321Ex@@fridge-nis7g.mongodb.net/fridgy?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;



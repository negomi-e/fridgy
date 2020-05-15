const { Schema, model } = require("mongoose");
const bcrtypt = require("bcrypt");


let validateEmail = function (email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  pass: {
    type: String,
    required: true,
  },
  channels: [{
    type: Schema.Types.ObjectId,
    ref: 'Channels'
  }],
})

userSchema.pre('save', function (next) {
  if (this.isModified('password') || this.isNew) {
    this.pass = bcrtypt.hashSync(this.pass, 12)
  }
  next()
})

module.exports = model('Users', userSchema)

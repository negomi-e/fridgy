const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

/* GET users listing. */
router.post('/login', async (req, res) => {
  const { email, pass } = req.body;
  console.log(email)

  try {
    const user = await User.findOne({ email: email })
    console.log(user)
    if (!user) throw 'cant find user'
    const passAuth = await bcrypt.compare(pass, user.pass)
    if (!passAuth) throw 'incorrect pass'

    if (passAuth) return res.json({
      message: 'success',
      statusAuth: true,
      userInfo: {
        id: user.id,
        name: user.firstName,
        email: user.email,
      }
    })
  } catch (error) {
    res.json(error)
  }

})

router.post('/registration', async (req, res) => {
  const { email, firstName, lastName, pass } = req.body;

  try {
    const user = await User.findOne({ email: email })
    if (user) throw 'sorry, this email is bind'
    if (pass.length < 4) throw 'sorry, this pass is easy'
    if (!firstName) throw 'please, inducate first name'
    if (!lastName) throw 'please, inducate last name'

    const newUser = await new User({
      firstName,
      lastName,
      email,
      pass,
    }).save()

    return res.json({
      message: 'success',
      statusAuth: true,
      userInfo: {
        id: newUser.id,
        name: newUser.fistName,
        email: newUser.email,
      }
    })
  } catch (error) {
    res.json(error)
  }

})

module.exports = router;

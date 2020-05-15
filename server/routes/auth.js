const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

/* GET users listing. */
router.post('/login', async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await User.findOne({ email: email })
    if (!user) throw 'cant find user'

    const passAuth = await bcrypt.compare(pass, user.pass)
    if (!passAuth) throw 'incorrect pass'

    if (passAuth) return res.json({
      message: 'success',
      statusAuth: true,
      userInfo: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    })

  } catch (error) {
    res.json(error)
  }

})

module.exports = router;

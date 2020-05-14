const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async (req, res) => {
  const { login, pass } = req.body;
  const user = await User.findOne({ email: login })
  if (!user) return res.json({ message: 'cant find user', statusAuth: false })

  if (user) {
    const passAuth = await bcrypt.compare(pass, user.password)
    if (!passAuth) return res.json({ message: 'incorrect pass', statusAuth: false })
    if (passAuth) return res.json({
      message: 'success',
      statusAuth: true,
      userInfo: {
        name: user.name,
        email: user.email
      }
    })
  }
})

module.exports = router;

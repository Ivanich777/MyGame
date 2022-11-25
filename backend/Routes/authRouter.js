const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  const {
    checkedPassword, login, password, email,
  } = req.body;

  if (password && email) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ message: 'Пользователь с таким именем уже существует' });
    } else if (password === checkedPassword) {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ password: hash, email, login });
      req.session.userId = newUser.id;
      res.status(200).json({ message: 'все ок', user: newUser.email });
    }
  }
});

router.post('/login', async (req, res) => {
  const { password, email } = req.body;
  if (password && email) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        req.session.userId = user.id;
        res.json({ message: 'успех', user: user.email });
      }
    } else {
      res.json({ message: 'Ваш login или password указаны не верно' });
    }
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.clearCookie('user_sid').json({ message: 'Session destroy' }));
});

module.exports = router;

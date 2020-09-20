const express = require('express');
const router = express.Router();

const { requireAuth } = require('../middlewares');

const User = require('../models/User');

router.get('/me', requireAuth, (req, res) => {
  return res.json(req.user);
});

router.get('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  return res.render('main', {
    page: 'profile',
    title: `${user.firstName} | Quarentreino`,
    styles: ['profile'],
    user: req.user,
    profile: user,
    playlists
  });
});

module.exports = router;

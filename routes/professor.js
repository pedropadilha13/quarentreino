const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  return res.render('main', {
    page: 'professor',
    path: '/professor',
    user: req.user
  });
});

module.exports = router;

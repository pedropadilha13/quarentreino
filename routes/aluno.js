const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  return res.render('main', {
    page: 'aluno',
    path: '/aluno',
    user: req.user
  });
});

module.exports = router;

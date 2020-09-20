const express = require('express');
const router = express.Router();

const { requireAuth, requireAluno, requireProfessor, requreAdmin } = require('../middlewares');

router.get('/', function (req, res, next) {
  return res.render('main', {
    page: 'index',
    path: '/',
    user: req.user
  });
});

router.get('/about', async (req, res) => {
  return res.render('main', {
    page: 'about',
    path: '/about',
    user: req.user
  });
});

router.get('/default', requireAuth, async (req, res) => {
  return res.redirect(`/${req.user.tipo}`);
});

router.get('/aluno', requireAuth, requireAluno, async (req, res) => {
  return res.render('main', {
    page: 'aluno',
    path: '/aluno',
    user: req.user
  });
});

router.get('/professor', requireAuth, requireProfessor, async (req, res) => {
  return res.render('main', {
    page: 'professor',
    path: '/professor',
    user: req.user
  });
});

router.get('/admin', requireAuth, requreAdmin, async (req, res) => {
  return res.render('main', {
    page: 'admin',
    path: '/admin',
    user: req.user
  });
});

module.exports = router;

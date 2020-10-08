const express = require('express');
const router = express.Router();
const moment = require('moment');

const User = require('../models/User');

router.get('/', async (req, res) => {
  const users = await User.find();
  return res.render('main', {
    page: 'admin',
    path: '/admin',
    user: req.user,
    scripts: ['admin', '../DataTables/datatables.min.js', 'moment.min.js'],
    styles: ['../DataTables/datatables.min.css'],
    users,
    moment
  });
});

module.exports = router;

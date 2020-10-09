const _ = require('lodash');
const {
  Types: { ObjectId }
} = require('mongoose');
const express = require('express');

const router = express.Router();

const User = require('../models/User');
const Treino = require('../models/Treino');

router.get('/', async (req, res) => {
  return res.render('main', {
    page: 'professor',
    path: '/professor',
    user: req.user
  });
});

router.get('/:id/alunos', async (req, res) => {
  try {
    const treinos = await Treino.findAll({
      professor: ObjectId(req.params.id)
    }).populate('aluno');

    const alunos = _.map(treinos, ({ aluno }) => aluno);

    return res.json(alunos);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

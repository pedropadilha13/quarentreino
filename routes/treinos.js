const _ = require('lodash');
const {
  Types: { ObjectId }
} = require('mongoose');
const express = require('express');

const router = express.Router();

const { requireProfessor, requireAdmin } = require('../middlewares');

const Treino = require('../models/Treino');

router.get('/:id', async (req, res) => {});

router.post('/', requireProfessor, async (req, res) => {
  try {
    const { aluno, nome, conteudo } = req.body;
    const newTreino = await Treino.create({
      professor: req.user._id,
      aluno: ObjectId(aluno),
      conteudo
    });

    return res.redirect(`/treinos/${newTreino._id}`);
  } catch (error) {
    console.error(error);
    req.session.messages = [
      ...(req.session.messages || []),
      { variant: 'danger', content: 'Ocorreu um erro ao criar o treino. Por favor, tente mais tarde.' }
    ];
    return res.status(500).redirect('/professor');
  }
});

module.exports = router;

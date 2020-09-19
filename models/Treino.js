const mongoose = require('mongoose');
const {
  Schema,
  Types: { ObjectId }
} = mongoose;
const ExercicioSchema = require('./Exercicio').schema;

const TreinoSchema = new Schema({
  aluno: {
    type: ObjectId,
    ref: 'User'
  },
  professor: {
    type: ObjectId,
    ref: 'User'
  },
  nome: {
    type: String,
    required: [true, 'Nome do treino é obrigatório']
  },
  conteudo: [ExercicioSchema],
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Treino', TreinoSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExercicioSchema = new Schema({
  nome: {
    type: String
  },
  descricao: {
    type: String
  },
  observacoes: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Exercicio', ExercicioSchema);

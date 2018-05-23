const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const ItinerarioSchema = mongoose.Schema({
  dias: [
    {
      dia: { type: number },
      data: { type: Date },
      atividades: {
        type: [
          {
            conteudo: { type: String },
            hora: { type: String },
            done: { type: Boolean },
            dicas: [
              {
                conteudo: { type: String },
                usuario: {
                  nome: { type: String },
                  email: { type: String }
                }
              }
            ]
          }
        ]
      }
    }
  ],
  local: {
    local: { type: String },
    lat: { type: Number },
    lon: { type: Number }
  },
  usuario: {
    nome: { type: String },
    email: { type: String }
  },
  descricao: { type: String },
  nome: { type: String },
  avaliacao: { type: Number, default: null },
  likect: { type: Number, default: null },
  rate_it: { type: Number, default: null }
});

const Itinerario = (module.exports = mongoose.model(
  "Itinerario",
  ItinerarioSchema
));

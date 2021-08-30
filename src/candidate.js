const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dataNasc: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: true },
    sexo: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    complemento: { type: String, unique: false, required: false },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    tel: { type: String, unique: false, required: true },
    cel: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    rg: { type: String, unique: false, required: true },
    veiculo: { type: String, unique: false, required: true },
    cnh: { type: String, unique: false, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
const Candidato = require('../desafioGama/candidate');


module.exports = {
    async register(req, res) {

        const { nome, cargo, dataNasc, estadoCivil, sexo, cep, logradouro, numero, complemento, bairro, cidade, uf, tel, cel, email, cpf, rg, veiculo, cnh } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dataNasc = dataNasc;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.complemento = complemento;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.tel = tel;
        newCandidate.cel = cel;
        newCandidate.email = email;
        newCandidate.cpf = cpf;
        newCandidate.rg = rg;
        newCandidate.veiculo = veiculo;
        newCandidate.cnh = cnh;
        
        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Sucesso!');
            }

            return res.status(200).send(savedCandidate);
        });
    },
};
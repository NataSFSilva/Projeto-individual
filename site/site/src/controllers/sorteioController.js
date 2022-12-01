var sorteioModel = require("../models/sorteioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function verificarSorteio(req, res) {
    var fkUsuario = req.params.fkUsuario;
    sorteioModel.verificarSorteio(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os sorteios: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function insertSorteio(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var frase = req.body.frase;
    var autor = req.body.autor;
    var fkUsuario = req.params.fkUser;

    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (frase == undefined) {
        res.status(400).send("Sua frase está undefined!");
    } else if (autor == undefined) {
        res.status(400).send("Seu autor está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        sorteioModel.insertSorteio(fkUsuario, frase, autor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o sorteio! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    verificarSorteio,
    insertSorteio,
    testar
}
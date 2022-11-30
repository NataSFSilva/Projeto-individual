var usuarioModel = require("../models/sorteioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function verificarSorteio(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var frase = req.body.fraseServer;
    var autor = req.body.autorServer;

    if (fkUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        
        usuarioModel.verificarSorteio(fkUsuario, frase, autor)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Frase e/ou autor inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function insertSorteio(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var frase = req.body.fraseServer;
    var autor = req.body.autorServer;

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
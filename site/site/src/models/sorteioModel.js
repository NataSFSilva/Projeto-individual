var database = require("../database/config");

function insertSorteio (fkUsuario, frase, autor) {
    console.log("ACESSEI O SORTEIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function insertSorteio(): ", fkUsuario, frase, autor);
    var instrucao = `
        INSERT INTO sorteioFrases (fkUsuario, frase, autor) VALUES ('${fkUsuario}', '${frase}', ${autor});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarSorteio(fkUsuario, frase, autor) {
    console.log("ACESSEI O SORTEIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificarSorteio(): ", fkUsuario, frase, autor);
    var instrucao = `
        SELECT fkUsuario, frase, autor FROM sorteioFrases;;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    insertSorteio,
    verificarSorteio
}

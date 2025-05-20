var database = require("../database/config")

function registrar(pontos,idCadastro) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar(): ", pontos, idCadastro);

        var instrucao = `
        INSERT INTO pontuacao (pontos, dtPonto, fkCadastroP)
        VALUES (${pontos}, DEFAULT, ${idCadastro});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
registrar
}
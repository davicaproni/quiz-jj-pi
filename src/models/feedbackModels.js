var database = require("../database/config")

function registrar(comentario, nota, idCadastro) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar(): ", comentario, nota, idCadastro);

        var instrucao = `
        INSERT INTO feedback (comentario, nota, dtComent, fkCadastroF)
        VALUES ('${comentario}',${nota}, DEFAULT, ${idCadastro});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
registrar
}
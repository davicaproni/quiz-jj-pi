var database = require("../database/config");

function buscarUltimasMedidas(fkCadastroP, limite_linhas) {

    var instrucaoSql = `SELECT 
                        pontos, 
                        dtPonto,
                        DATE_FORMAT(dtPonto,'%H:%i:%s') as momento_grafico
                    FROM pontuacao
                    WHERE fkCadastroP = ${fkCadastroP}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
                        pontos, 
                        dtPonto,
                        DATE_FORMAT(dtPonto,'%H:%i:%s') as momento_grafico
                    FROM pontuacao
                    WHERE fkCadastroP = ${fkCadastroP}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}

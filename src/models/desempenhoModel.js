var database = require("../database/config");

function buscarUltimasMedidas(fkCadastroP) {

    var instrucaoSql = `SELECT 
                        pontos, 
                        DATE_FORMAT(dtPonto, '%d/%m %H:%i') as momento_grafico
                    FROM pontuacao
                    WHERE fkCadastroP = ${fkCadastroP}
                    ORDER BY dtPonto DESC `
                    ;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkCadastroP) {

    var instrucaoSql = `SELECT 
                        pontos, 
                        DATE_FORMAT(dtPonto, '%d/%m %H:%i') as momento_grafico
                    FROM pontuacao
                    WHERE fkCadastroP = ${fkCadastroP}
                    ORDER BY dtPonto DESC `
                    ;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,

}

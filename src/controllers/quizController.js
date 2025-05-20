const quizModel = require('../models/quizModel');

function registrarQuiz(req, res) {
    
    var pontos = req.body.pontosServer;
    var idCadastro = req.body.fkCadastroPServer;

        console.log(req.body);
        quizModel.registrar(pontos ,idCadastro)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });


    
}
    


module.exports = {
registrarQuiz
};
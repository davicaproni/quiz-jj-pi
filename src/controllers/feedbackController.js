const feedbackModel = require('../models/feedbackModels');

function registrarComentario(req, res) {
    
    var comentario = req.body.comentarioServer;
    var nota = req.body.notaServer;
    var idCadastro = req.body.fkCadastroFServer;


        console.log(req.body);
        feedbackModel.registrar(comentario, nota, idCadastro)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
   
}
module.exports = {
  registrarComentario
};
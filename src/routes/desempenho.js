var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.get("/ultimas/:fkCadastroP", function (req, res) {
    desempenhoController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:fkCadastroP", function (req, res) {
    desempenhoController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;
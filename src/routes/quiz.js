var express = require("express");
    var router = express.Router();

    var quizController = require("../controllers/quizController");


    router.post("/registrarQuiz", function (req, res) {
        quizController.registrarQuiz(req, res);
    })
    
    router.post("/autenticar", function (req, res) {
        usuarioController.autenticar(req, res);
    });

    module.exports = router;

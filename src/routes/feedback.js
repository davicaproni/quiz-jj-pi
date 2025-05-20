var express = require("express");
    var router = express.Router();

    var feedbackController = require("../controllers/feedbackController");


    router.post("/registrarComentario", function (req, res) {
        feedbackController.registrarComentario(req, res);
    })
    

    module.exports = router;
var express = require("express");

var router = express.Router();

var sorteioController = require("../controllers/sorteioController");

router.get("/", function (req, res) {
    sorteioController.verificarSorteio(req, res);
});

router.post("/registrar/:fkUsuario", function (req, res) {
    sorteioController.insertSorteio(req, res);
});

router.get("/verificar/:fkUsuario", function (req, res) {
    sorteioController.verificarSorteio(req, res);
});

module.exports = router;
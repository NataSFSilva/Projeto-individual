var express = require("express");

var router = express.Router();

var sorteioController = require("../controllers/sorteioController");

router.get("/", function (req, res) {
    sorteioController.verificarSorteio(req, res);
});

router.get("/insertSorteio", function (req, res) {
    sorteioController.insertSorteio(req, res);
});

router.get("/verificarSorteio", function (req, res) {
    sorteioController.verificarSorteio(req, res);
});

module.exports = router;
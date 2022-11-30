var express = require("express");
var router = express.Router();

var feedController = require("../controllers/feedController");

router.get("/", function (req, res) {
    feedController.testar(req, res);
});

router.get("/listar", function (req, res) {
    feedController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    feedController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:texto", function (req, res) {
    feedController.pesquisarTexto(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    feedController.publicar(req, res);
});

module.exports = router;
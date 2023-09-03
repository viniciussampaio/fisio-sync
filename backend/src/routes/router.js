const express = require("express");
const physiosController = require("../controllers/physiosControllers");
const router = express.Router();

router.get("/", (req, res) => res.status(200).send("Rota funcionando!"));

router.get("/get-all-physio", physiosController.getAllPhysios);

module.exports = router;

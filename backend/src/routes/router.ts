import express from "express";
import physiosControllers from "../controllers/physiosControllers";
const router = express.Router();

router.get("/", (req, res) => res.status(200).send("Rota funcionando!"));

router.get("/get-all-physio", physiosControllers.getAllPhysios);

router.post("/register", physiosControllers.register);

export default router;


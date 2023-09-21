import { Router } from "express";
import { PhysioController } from "./controllers/UserController";

const routes = Router();

routes.post("/create-physio", new PhysioController().register);

export default routes;


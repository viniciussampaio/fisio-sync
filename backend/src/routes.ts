import { Router } from "express";
import { PhysioController } from "./controllers/PhysioController";
import { PatientController } from "./controllers/PatientController";
import { SchedulesController } from "./controllers/SchedulesController";

const routes = Router();

routes.post("/create-physio", new PhysioController().register);
routes.post("/create-patient", new PatientController().createPatient);
routes.post("/create-schedules", new SchedulesController().createSchedules);

export default routes;

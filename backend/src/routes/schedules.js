const express = require("express");
const scheduleController = require("../controllers/scheduleController");
const schedulesMiddleware = require("../middlewares/schedulesMiddleware");

const routeSchedules = express.Router();

routeSchedules.get("/schedules", scheduleController.getAllSchedules);
routeSchedules.post(
  "/create-schedules",
  schedulesMiddleware.validateBody,
  scheduleController.createSchedule
);
routeSchedules.delete(
  "/remove-schedules/:idPatient",
  scheduleController.deleteSchedule
);
routeSchedules.put(
  "/update-schedules/:idPatient",
  scheduleController.updateSchedule
);

module.exports = routeSchedules;


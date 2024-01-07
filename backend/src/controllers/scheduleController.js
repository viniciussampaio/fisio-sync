const scheduleModel = require("../models/scheduleModel");

const getAllSchedules = async (_req, res) => {
  const [schedules] = await scheduleModel.getAllSchedules();

  return res.status(200).json(schedules);
};

const createSchedule = async (req, res) => {
  const createdSchedule = await scheduleModel.createSchedule(req.body);
  return res.status(201).json(createdSchedule);
};

const deleteSchedule = async (req, res) => {
  const { idPatient } = req.params;

  await scheduleModel.deleteSchedule(idPatient);
  return res.status(204).json();
};

const updateSchedule = async (req, res) => {
  const { idPatient } = req.params;

  await scheduleModel.updatedSchedule(idPatient, req.body);
  return res.status(204).json();
};

module.exports = {
  getAllSchedules,
  createSchedule,
  deleteSchedule,
  updateSchedule,
};


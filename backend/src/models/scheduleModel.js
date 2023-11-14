const connection = require("../db/connection");

const getAllSchedules = async () => {
  const schedules = await connection.execute("SELECT * FROM schedules");
  return schedules;
};

const createSchedule = async (schedule) => {
  const { namePatient, physioResponsable, nextSession } = schedule;

  const query =
    "INSERT INTO schedules(namePatient, physioResponsable, nextSession) VALUES (?,?,?)";

  const [createdSchedule] = await connection.execute(query, [
    namePatient,
    physioResponsable,
    nextSession,
  ]);
  return { insertId: createdSchedule.insertId };
};

const deleteSchedule = async (idPatient) => {
  const query = "DELETE FROM schedules WHERE idPatient = ?";

  const removeSchedule = await connection.execute(query, [idPatient]);
  return removeSchedule;
};

const updatedSchedule = async (idPatient, schedules) => {
  const { namePatient, physioResponsable } = schedules;

  const query =
    "UPDATE schedules SET namePatient = ?, physioResponsable = ? WHERE idPatient = ?";

  const updatedSchedule = await connection.execute(query, [
    namePatient,
    physioResponsable,
    idPatient,
  ]);
  return updatedSchedule;
};

module.exports = {
  getAllSchedules,
  createSchedule,
  deleteSchedule,
  updatedSchedule,
};


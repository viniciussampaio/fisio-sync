import { Request, Response } from "express";
import { patientRepository } from "../repositories/PatientRepository";

export class SchedulesController {
  async createSchedules(req: Request, res: Response) {
    const { namePatient, anamnesis } = req.body;

    try {
      const newPatient = patientRepository.create({ namePatient, anamnesis });
      await patientRepository.save(newPatient);

      return res.status(201).json(newPatient);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}


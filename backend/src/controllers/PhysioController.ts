import { Request, Response } from "express";
import { physioRepository } from "../repositories/PhysioRepository";

export class PhysioController {
  // criar usuário pra login
  async register(req: Request, res: Response) {
    const { namePhysio, emailPhysio } = req.body;

    if (!namePhysio) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }
    try {
      const newPhysio = physioRepository.create({ namePhysio, emailPhysio });

      await physioRepository.save(newPhysio);

      return res.status(200).json(newPhysio);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}


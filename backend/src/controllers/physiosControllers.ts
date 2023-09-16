import { Request, Response } from "express";
import physiosModel from "../models/physiosModels";
import { hash } from "bcrypt";

const getAllPhysios = async (req: Request, res: Response) => {
  const physios = await physiosModel.getAllPhysios();
  return res.status(200).json(physios);
};

const register = async (req: Request, res: Response) => {
  const randomSalt = Math.floor(Math.random() * 8);
  console.log(randomSalt);
  const passwordHash = await hash(req.body.password, randomSalt);
  console.log(passwordHash);
  return res.status(200).json("Hash criado!");
};

export default {
  getAllPhysios,
  register,
};


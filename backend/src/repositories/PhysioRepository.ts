import { AppDataSource } from "../data-source";
import { Physio } from "../entities/Physio";

export const physioRepository = AppDataSource.getRepository(Physio);


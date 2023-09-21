import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Physio } from "./Physio";

@Entity("patients")
export class Patient {
  @PrimaryGeneratedColumn()
  idPatient: number;

  @Column({ type: "text" })
  namePatient: string;

  @Column({ type: "text" })
  anamnesis: string;

  @ManyToOne(() => Physio, (physio) => physio.patients)
  @JoinColumn({ name: "physio_id" })
  physio: Physio;
}


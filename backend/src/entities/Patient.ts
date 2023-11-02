import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Physio } from "./Physio";
import { Schedules } from "./Schedules";

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

  @OneToMany(() => Schedules, (schedules) => schedules.patients)
  @JoinColumn({ name: "schedules_id" })
  schedules: Schedules;
}

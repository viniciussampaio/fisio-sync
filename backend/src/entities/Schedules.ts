import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "./Patient";

@Entity("schedules")
export class Schedules {
  @PrimaryGeneratedColumn()
  idSchedules: number;

  @Column({ type: "date" })
  previousSession: string;

  @Column({ type: "date" })
  futureSession: string;

  @OneToMany(() => Patient, (patient) => patient.schedules)
  patients: Patient[];
}


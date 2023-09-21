import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "./Patient";

@Entity("physios")
export class Physio {
  @PrimaryGeneratedColumn()
  idPhysio: number;

  @Column({
    type: "text",
  })
  namePhysio: string;

  @Column({
    type: "text",
  })
  emailPhysio: string;

  @OneToMany(() => Patient, (patient) => patient.physio)
  patients: Patient[];
}


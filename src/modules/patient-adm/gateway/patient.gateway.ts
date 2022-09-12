import { Patient } from "../domain/entity/patient.entity";

export interface PatientGateway {
  add(patient: Patient): Promise<void>;
  find(id: string): Promise<Patient>;
}

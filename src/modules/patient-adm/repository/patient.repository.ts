import { Id } from "../../@shared/value-object/id.value-object";
import { Patient } from "../domain/entity/patient.entity";
import { PatientGateway } from "../gateway/patient.gateway";
import { PatientModel } from "./patient.model";

export class PatientRepository implements PatientGateway {
  async add(patient: Patient): Promise<void> {
    await PatientModel.create({
      id: patient.id.id,
      name: patient.name,
      birthDate: patient.birthDate,
      cpf: patient.cpf,
      email: patient.email,
      phone: patient.phone,
      address: patient.address,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async find(id: string): Promise<Patient> {
    const result = await PatientModel.findOne({
      where: { id },
      rejectOnEmpty: true,
    });

    if (!result) {
      throw new Error("Patient not found");
    }

    const { name, birthDate, cpf, email, phone, address } = result;

    return new Patient({
      id: new Id(id),
      name,
      birthDate,
      cpf,
      email,
      phone,
      address,
    });
  }
}

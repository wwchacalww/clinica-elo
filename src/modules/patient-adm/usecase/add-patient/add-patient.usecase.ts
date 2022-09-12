import { Id } from "../../../@shared/value-object/id.value-object";
import { Patient } from "../../../patient-adm/domain/entity/patient.entity";
import { PatientGateway } from "../../../patient-adm/gateway/patient.gateway";
import { AddPatientInputDTO, AddPatientOutputDTO } from "./add-patient.dto";

export class AddPatientUsecase {
  private _patientRepository: PatientGateway;
  constructor(_patientRepository: PatientGateway) {
    this._patientRepository = _patientRepository;
  }

  async execute(input: AddPatientInputDTO): Promise<AddPatientOutputDTO> {
    const props = {
      id: new Id(input.id),
      name: input.name,
      birthDate: input.birthDate,
      cpf: input.cpf,
      email: input.email,
      phone: input.phone,
      address: input.address,
    };

    const patient = new Patient(props);
    this._patientRepository.add(patient);

    return {
      id: patient.id.id,
      name: patient.name,
      birthDate: patient.birthDate,
      cpf: patient.cpf,
      email: patient.email,
      phone: patient.phone,
      address: patient.address,
      createdAt: patient.createdAt,
      updatedAt: patient.updatedAt,
    };
  }
}

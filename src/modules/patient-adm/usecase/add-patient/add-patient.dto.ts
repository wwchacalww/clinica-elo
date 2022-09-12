export interface AddPatientInputDTO {
  id?: string;
  name: string;
  birthDate: Date;
  cpf: string;
  email: string;
  phone: string;
  address: string;
}

export interface AddPatientOutputDTO {
  id: string;
  name: string;
  birthDate: Date;
  cpf: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

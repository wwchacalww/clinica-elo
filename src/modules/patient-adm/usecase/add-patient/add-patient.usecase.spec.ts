import { AddPatientUsecase } from "./add-patient.usecase";

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn(),
  };
};
describe("Add Patient usecase Unit Test", () => {
  it("should add a patient", async () => {
    const patientRespository = MockRepository();
    const usecase = new AddPatientUsecase(patientRespository);

    const input = {
      name: "Fulando de Tal",
      birthDate: new Date(),
      cpf: "123.345.654-23",
      email: "fulano@gmail.com",
      phone: "(61) 9999-9999",
      address: "QR 234 Conjutno 234 casa 2344",
    };
    const result = await usecase.execute(input);

    expect(patientRespository.add).toHaveBeenCalled();
    expect(result.id).toBeDefined();
    expect(result.name).toBe(input.name);
    expect(result.birthDate).toBe(input.birthDate);
    expect(result.cpf).toBe(input.cpf);
    expect(result.email).toBe(input.email);
    expect(result.phone).toBe(input.phone);
    expect(result.address).toBe(input.address);
  });
});

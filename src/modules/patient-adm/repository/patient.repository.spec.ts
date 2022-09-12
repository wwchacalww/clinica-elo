import { Id } from "../../@shared/value-object/id.value-object";
import { Sequelize } from "sequelize-typescript";
import { Patient } from "../domain/entity/patient.entity";
import { PatientModel } from "./patient.model";
import { PatientRepository } from "./patient.repository";

describe("Patient Repository Test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([PatientModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should register a new patient", async () => {
    const patientProps = {
      id: new Id("5c911189-7932-4e24-aef1-f49bfe7d20e8"),
      name: "Fulando de Tal",
      birthDate: new Date(),
      cpf: "123.345.654-23",
      email: "fulano@gmail.com",
      phone: "(61) 9999-9999",
      address: "QR 234 Conjutno 234 casa 2344",
    };

    const patient = new Patient(patientProps);
    const patientRepository = new PatientRepository();
    await patientRepository.add(patient);

    const patientDb = await PatientModel.findOne({
      where: { id: "5c911189-7932-4e24-aef1-f49bfe7d20e8" },
      rejectOnEmpty: true,
    });

    expect(patient.name).toEqual(patientDb.name);
    expect(patient.birthDate).toEqual(patientDb.birthDate);
    expect(patient.cpf).toEqual(patientDb.cpf);
    expect(patient.email).toEqual(patientDb.email);
    expect(patient.phone).toEqual(patientDb.phone);
    expect(patient.address).toEqual(patientDb.address);
  });

  it("should find a patient", async () => {
    const patientRepository = new PatientRepository();
    const created_at = new Date();
    PatientModel.create({
      id: "5c911189-7932-4e24-aef1-f49bfe7d20e8",
      name: "Fulando de Tal",
      birthDate: created_at,
      cpf: "123.345.654-23",
      email: "fulano@gmail.com",
      phone: "(61) 9999-9999",
      address: "QR 234 Conjutno 234 casa 2344",
    });

    const patient = await patientRepository.find(
      "5c911189-7932-4e24-aef1-f49bfe7d20e8"
    );

    expect(patient.id.id).toEqual("5c911189-7932-4e24-aef1-f49bfe7d20e8");
    expect(patient.name).toEqual("Fulando de Tal");
    expect(patient.birthDate).toStrictEqual(created_at);
    expect(patient.cpf).toEqual("123.345.654-23");
    expect(patient.email).toEqual("fulano@gmail.com");
    expect(patient.phone).toEqual("(61) 9999-9999");
    expect(patient.address).toEqual("QR 234 Conjutno 234 casa 2344");
  });
});

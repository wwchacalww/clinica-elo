import AggregateRoot from "modules/@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "modules/@shared/domain/entity/base.entity";
import { Id } from "modules/@shared/value-object/id.value-object";

type PatientProps = {
  id?: Id;
  name: string;
  birthDate: Date;
  cpf: string;
  email: string;
  phone: string;
  address: string;
};

export class Patient extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _cpf: string;
  private _birthDate: Date;
  private _phone: string;
  private _email: string;
  private _address: string;

  constructor(props: PatientProps) {
    super(props.id);
    this._name = props.name;
    this._cpf = props.cpf;
    this._birthDate = props.birthDate;
    this._phone = props.phone;
    this._email = props.email;
    this._address = props.address;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get cpf(): string {
    return this._cpf;
  }
  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get birthDate(): Date {
    return this._birthDate;
  }
  set birthDate(birthDate: Date) {
    this._birthDate = birthDate;
  }

  get phone(): string {
    return this._phone;
  }
  set phone(phone: string) {
    this._phone = phone;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get address(): string {
    return this._address;
  }
  set address(address: string) {
    this._address = address;
  }
}

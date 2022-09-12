import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
  tableName: "patients",
  timestamps: false,
})
export class PatientModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false })
  declare birthDate: Date;

  @Column({ allowNull: false })
  declare cpf: string;

  @Column({ allowNull: false })
  declare email: string;

  @Column({ allowNull: false })
  declare phone: string;

  @Column({ allowNull: false })
  declare address: string;
}

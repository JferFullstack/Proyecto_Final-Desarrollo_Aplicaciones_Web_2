// backend/src/models/User.ts
import { Table, Column, Model, DataType, Unique } from 'sequelize-typescript';

@Table({
  tableName: 'users', // Asegúrate que coincida con el nombre de tu tabla en MySQL
  timestamps: true, // Esto creará automáticamente createdAt y updatedAt
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED, // Usamos UNSIGNED como en tu SQL
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
  id!: number;

  @Unique
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: 'username',
  })
  username!: string;

  @Unique
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: 'email',
  })
  email!: string;

  @Column({
    type: DataType.STRING(255), // Aquí se guardará la contraseña hasheada
    allowNull: false,
    field: 'password',
  })
  password!: string;

  // createdAt y updatedAt son manejados automáticamente por timestamps: true
  // Si los quieres explícitos para tipos, puedes agregarlos así:
  @Column(DataType.DATE)
  createdAt!: Date;

  @Column(DataType.DATE)
  updatedAt!: Date;
}
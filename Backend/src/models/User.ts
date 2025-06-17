// backend/src/models/User.ts
import { Table, Column, Model, DataType, Unique, Default, AllowNull } from 'sequelize-typescript';
import { Optional } from 'sequelize';

// Define los atributos que son opcionales al crear una nueva instancia (porque la DB los genera, como 'id')
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string; // La contraseña ya hashada
  createdAt: Date;
  updatedAt: Date;
}

// Define los atributos que son opcionales al crear una instancia de User
// Por ejemplo, 'id', 'createdAt', 'updatedAt' son generados por la base de datos.
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

@Table({
  timestamps: true, // Esto añade automáticamente los campos `createdAt` y `updatedAt`
  tableName: 'users', // Nombre de la tabla en la base de datos
  modelName: 'User', // Nombre del modelo
})
export class User extends Model<UserAttributes, UserCreationAttributes> {

  @AllowNull(false)
  @Unique // Asegura que el nombre de usuario sea único
  @Column(DataType.STRING) // Define el tipo de dato como STRING (VARCHAR en MySQL)
  username!: string; // El '!' indica que esta propiedad será inicializada por Sequelize

  @AllowNull(false)
  @Unique // Asegura que el correo electrónico sea único
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING) // Almacenará la contraseña hashada
  password!: string;

  // `createdAt` y `updatedAt` son añadidos automáticamente por `timestamps: true`
  // Pero puedes definirlos explícitamente si quieres más control o tipado.
  // @Column(DataType.DATE)
  // createdAt!: Date;

  // @Column(DataType.DATE)
  // updatedAt!: Date;
}
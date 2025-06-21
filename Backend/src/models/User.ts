// backend/src/models/User.ts
import { Table, Column, Model, DataType, Unique, AllowNull, Scopes } from 'sequelize-typescript';
import { Optional } from 'sequelize';

// Definición del Enum para los roles de usuario
// Esto permite que los roles sean predefinidos y consistentes.
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  ATTORNEY = 'attorney', 
  CLIENT = 'client',     
}


interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string; 
  role: UserRole;   
  createdAt: Date;
  updatedAt: Date;
}


interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt' | 'role'> {}


@Scopes(() => ({
  withPassword: {
    attributes: { include: ['password'] } 
  }
}))
@Table({
  timestamps: true, 
  tableName: 'users', 
  modelName: 'User',
  defaultScope: { 
    attributes: { exclude: ['password'] } 
  }
})
export class User extends Model<UserAttributes, UserCreationAttributes> {

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  username!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING) 
  password!: string;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    defaultValue: UserRole.USER, 
  })
  role!: UserRole; 
}

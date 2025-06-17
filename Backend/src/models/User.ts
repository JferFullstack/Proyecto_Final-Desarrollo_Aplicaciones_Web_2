// backend/src/models/User.ts
import { Table, Column, Model, DataType, Unique, Default, AllowNull } from 'sequelize-typescript';
import { Optional } from 'sequelize';


interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string; 
  createdAt: Date;
  updatedAt: Date;
}


interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

@Table({
  timestamps: true, 
  tableName: 'users', 
  modelName: 'User', 
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

}
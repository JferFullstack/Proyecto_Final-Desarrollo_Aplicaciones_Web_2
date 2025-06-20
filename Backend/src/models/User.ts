// backend/src/models/User.ts
import { Table, Column, Model, DataType, Unique, Default, AllowNull, Scopes } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import bcrypt from 'bcryptjs';

// Definición de roles de usuario
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt' | 'role'> {}

@Scopes(() => ({
  withoutPassword: {
    attributes: { exclude: ['password'] }
  }
}))
@Table({
  timestamps: true,
  tableName: 'users',
  modelName: 'User',
  hooks: {
    beforeCreate: async (user: User) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user: User) => {
      if (user.changed('password') && user.password) {
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
})
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING(50),
    validate: {
      len: [3, 50],
      is: /^[a-zA-Z0-9_]+$/
    }
  })
  username!: string;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING(100),
    validate: {
      isEmail: true,
      len: [5, 100]
    }
  })
  email!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(255),
    validate: {
      len: [8, 255]
    }
  })
  password!: string;

  @AllowNull(false)
  @Default(UserRole.USER)
  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    validate: {
      isIn: [Object.values(UserRole)]
    }
  })
  role!: UserRole;

  // Método para verificar contraseña
  async isValidPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  // Método para verificar rol
  hasRole(role: UserRole): boolean {
    return this.role === role;
  }

  @Column({
    type: DataType.DATE,
    field: 'createdAt'
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    field: 'updatedAt'
  })
  updatedAt!: Date;
}
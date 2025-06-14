// backend/src/models/User.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import bcrypt from 'bcryptjs';

// Define un tipo para los atributos del modelo User
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password?: string; // Hacemos password opcional para casos donde no se necesita al obtener un usuario
  createdAt?: Date;
  updatedAt?: Date;
}

// Define un tipo para los atributos que son opcionales al crear un User
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// Define el modelo User extendiendo Model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string; // Aunque es opcional al crear, siempre estará en la DB

  // Timestamps (createdAt, updatedAt) son gestionados por Sequelize
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Método para comparar contraseñas
  public isValidPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

// Inicializa el modelo
User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Validación de formato de email
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize, // Pasa la instancia de sequelize
  tableName: 'users', // Nombre de la tabla en la base de datos
  timestamps: true, // Habilita createdAt y updatedAt
  hooks: {
    // Hook para hashear la contraseña antes de guardar el usuario
    beforeCreate: async (user: User) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10); // Genera un "salt" para mayor seguridad
        user.password = await bcrypt.hash(user.password, salt); // Hashed password
      }
    },
    beforeUpdate: async (user: User) => {
      // Si la contraseña ha cambiado, la volvemos a hashear
      if (user.changed('password') && user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
});

// Sincronizar el modelo con la base de datos (solo en desarrollo)
// En un entorno de producción, es mejor usar migraciones (ver más abajo)
// User.sync({ alter: true }) // `alter: true` intenta hacer cambios sin perder datos existentes
//   .then(() => console.log('Tabla de usuarios creada o actualizada.'))
//   .catch((err: Error) => console.error('Error al sincronizar tabla de usuarios:', err));


export default User;
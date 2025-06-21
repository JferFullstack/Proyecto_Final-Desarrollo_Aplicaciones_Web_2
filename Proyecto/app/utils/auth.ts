// frontend/utils/auth.ts

// Interfaz para los datos del usuario que guardaremos
interface UserAuthData {
  id: number;
  username: string;
  email: string;
  role: string;
}

const TOKEN_KEY = 'jwt_token'; // Clave para guardar el token en localStorage
const USER_KEY = 'user_data';   // Clave para guardar los datos del usuario en localStorage

/**
 * Guarda el token JWT y los datos del usuario en localStorage.
 * @param token El token JWT recibido del backend.
 * @param user Los datos del usuario (id, username, email, role).
 */
export const setAuthData = (token: string, user: UserAuthData) => {
  if (typeof window !== 'undefined') { // Asegura que solo se ejecute en el lado del cliente (navegador)
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
};

/**
 * Obtiene el token JWT de localStorage.
 * @returns El token JWT o null si no se encuentra.
 */
export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

/**
 * Obtiene los datos del usuario de localStorage.
 * @returns Los datos del usuario o null si no se encuentran.
 */
export const getUserData = (): UserAuthData | null => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem(USER_KEY);
    try {
        return userData ? JSON.parse(userData) : null;
    } catch (e) {
        console.error("Error parsing user data from localStorage", e);
        return null;
    }
  }
  return null;
};

/**
 * Elimina el token JWT y los datos del usuario de localStorage (para cerrar sesión).
 */
export const removeAuthData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
};

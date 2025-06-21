// frontend/app/(auth)/signup/SignUpForm.tsx
'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setAuthData } from '@/app/utils/auth'; // Importamos la utilidad para guardar datos de autenticación

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('');
    setIsSuccess(null);
    setLoading(true);

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      setIsSuccess(false);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/auth/register', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json(); 

      if (response.ok) { 
        setMessage(data.message || '¡Registro exitoso!');
        setIsSuccess(true);
        
        // Si el backend devuelve el token y los datos del usuario,
        // los guardamos y redirigimos directamente al dashboard.
        if (data.token && data.user) {
          setAuthData(data.token, data.user); // Guardar el token y los datos del usuario
          router.push('/dashboard'); // Redirigir al dashboard inmediatamente
        } else {
          // Si el backend no devuelve token/user, redirigimos al login
          router.push('/login'); 
        }
        
      } else { 
        setMessage(data.message || 'Error al registrar. Inténtalo de nuevo.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error de red:', error);
      setMessage('No se pudo conectar con el servidor. Inténtalo más tarde.');
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Se ha eliminado el 'className' del formulario para un diseño más básico,
    // revirtiendo a un estilo que depende más del layout de la página contenedora.
    <form onSubmit={handleSubmit}>
      {/* Se ha eliminado el 'className' del título para un diseño más básico. */}
      
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Nombre de Usuario</label>
        <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required disabled={loading} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo Electrónico</label>
        <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={loading} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={loading} />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
        <input type="password" id="confirmPassword" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required disabled={loading} />
      </div>
      {/* Se ha cambiado el estilo del botón a 'btn-primary' para consistencia con el Login, si prefieres 'btn-success', puedes cambiarlo. */}
      <button type="submit" className="btn btn-primary w-100" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>
      {message && (
        <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
          {message}
        </div>
      )}
    </form>
  );
}

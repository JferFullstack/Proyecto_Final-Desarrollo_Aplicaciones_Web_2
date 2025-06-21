// frontend/app/(auth)/login/SignInForm.tsx
'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setAuthData } from '@/app/utils/auth'; // ¡Ruta de importación actualizada!

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(''); 
    setIsSuccess(null);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); 

      if (response.ok) { 
        setMessage(data.message || 'Inicio de sesión exitoso!');
        setIsSuccess(true);
        // ¡Importante! Guardar el token y la información del usuario
        if (data.token && data.user) {
          setAuthData(data.token, data.user);
        }

        router.push('/dashboard'); // Redirige al usuario al dashboard
      } else { 
        setMessage(data.message || 'Error al iniciar sesión. Inténtalo de nuevo.');
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
    // Se ha eliminado el 'className' del formulario para un diseño más básico.
    <form onSubmit={handleSubmit}>
      {/* Se ha eliminado el 'className' del título para un diseño más básico. */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo Electrónico</label>
        <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={loading} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={loading} />
      </div>
      <button type="submit" className="btn btn-primary w-100" disabled={loading}>
        {loading ? 'Iniciando...' : 'Iniciar Sesión'}
      </button>
      {message && (
        <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
          {message}
        </div>
      )}
    </form>
  );
}

// app/(auth)/login/SignInForm.tsx
'use client'; // ¡CRÍTICO!

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Para mostrar mensajes de éxito/error al usuario
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(''); // Limpiar mensajes anteriores
    setIsSuccess(null);
    setLoading(true);

    try {
      const response = await fetch('/login', { // ENVÍA AL BACKEND /login
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); // Recibe la respuesta del backend

      if (response.ok) { // Si el backend responde con un 2xx
        setMessage(data.message || 'Inicio de sesión exitoso!');
        setIsSuccess(true);
        // Redirige al usuario después de un inicio de sesión exitoso
        router.push('/');
      } else { // Si el backend responde con un error (ej. 400, 401, 500)
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
    <form onSubmit={handleSubmit}>
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
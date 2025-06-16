// app/(auth)/signup/SignUpForm.tsx
'use client'; // ¡CRÍTICO!

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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
      const response = await fetch('/signup', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json(); // Recibe la respuesta del backend

      if (response.ok) { // Si el backend responde con un 2xx
        setMessage(data.message || '¡Registro exitoso!');
        setIsSuccess(true);
        // Redirige al usuario después de un registro exitoso
        setTimeout(() => {
          router.push('/login');
        }, 2000); // Dar un tiempo para que el usuario vea el mensaje de éxito
      } else { // Si el backend responde con un error
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
    <form onSubmit={handleSubmit}>
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
      <button type="submit" className="btn btn-success w-100" disabled={loading}>
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
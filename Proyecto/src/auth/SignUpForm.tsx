// src/components/auth/SignUpForm.tsx
'use client'; 

import React, { useState } from 'react';
import { Input } from '../components/ui/input'; 
import { Button } from '../components/ui/button';  
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; 

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log('Intentando registrar usuario:', { username, email, password });

    try {
      const response = await new Promise((resolve) => setTimeout(() => {
        if (username && email && password.length >= 6) {
          resolve({ success: true, message: 'Registro exitoso. ¡Bienvenido!' });
        } else {
          resolve({ success: false, message: 'Por favor, completa todos los campos y asegúrate que la contraseña tenga al menos 6 caracteres.' });
        }
      }, 1500));

      const data = response as { success: boolean; message: string };

      if (data.success) {
        alert(data.message);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Ocurrió un error al intentar registrarse.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
      <div>
        <label htmlFor="signup-username" className="sr-only">Usuario</label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            id="signup-username"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="pl-10"
          />
        </div>
      </div>
      <div>
        <label htmlFor="signup-email" className="sr-only">Email</label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            id="signup-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10"
          />
        </div>
      </div>
      <div>
        <label htmlFor="signup-password" className="sr-only">Contraseña</label>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            id="signup-password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="pl-10"
          />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Registrando...' : 'REGISTRARSE'}
      </Button>
    </form>
  );
}
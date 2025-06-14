// src/components/auth/SignInForm.tsx
'use client'; 

import React, { useState } from 'react';
import { Input } from '../components/ui/input'; 
import { Button } from '../components/ui/button';
import { FaUser, FaLock } from 'react-icons/fa'; 


export default function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log('Intentando iniciar sesión con:', { username, password });

    try {
      const response = await new Promise((resolve) => setTimeout(() => {
        if (username === 'testuser' && password === 'password123') {
          resolve({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
          resolve({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
      }, 1500));

      const data = response as { success: boolean; message: string };

      if (data.success) {
        alert(data.message);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Ocurrió un error al intentar iniciar sesión.');
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
        <label htmlFor="username" className="sr-only">Usuario</label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            id="username"
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
        <label htmlFor="password" className="sr-only">Contraseña</label>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="pl-10" 
          />
        </div>
      </div>
      <div className="text-right text-sm">
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Iniciando Sesión...' : 'INICIAR SESIÓN'}
      </Button>
    </form>
  );
}
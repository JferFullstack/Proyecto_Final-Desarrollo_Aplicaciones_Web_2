// src/components/auth/SignInForm.tsx
'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function SignInForm() {
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_URL) {
      setError('Error: La URL del API no está configurada.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Inicio de sesión exitoso:', data);
        if (data.token) {
          localStorage.setItem('authToken', data.token); 
        }
        alert(data.message || 'Inicio de sesión exitoso!');
        router.push('/dashboard'); 
      } else {
        
        setError(data.message || 'Error en el inicio de sesión. Credenciales inválidas.');
        console.error('Error de inicio de sesión:', data);
      }
    } catch (err: any) {
      console.error('Error de red o del servidor:', err);
      setError('Error de conexión. Por favor, inténtalo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
}
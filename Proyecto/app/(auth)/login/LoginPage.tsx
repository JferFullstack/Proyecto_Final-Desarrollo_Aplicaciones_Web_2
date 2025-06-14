// src/app/(auth)/login/page.tsx
import React from 'react';
import Link from 'next/link';

import SignInForm from './SignInForm';


export default function LoginPage() {
  return (
    <div className="w-96 rounded-lg bg-gray-800 p-8 shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-bold text-white">Iniciar Sesión</h1>
      <SignInForm />
      <p className="mt-4 text-center text-sm text-gray-400">
        ¿No tienes una cuenta?{' '}
        <Link href="/signup" className="text-blue-500 hover:underline">Regístrate</Link>
      </p>
    </div>
  );
}
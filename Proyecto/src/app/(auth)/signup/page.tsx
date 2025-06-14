// src/app/(auth)/signup/page.tsx
import React from 'react';
import Link from 'next/link';
import SignUpForm from '../../../auth/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="w-96 rounded-lg bg-gray-800 p-8 shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-bold text-white">Registrarse</h1>
      <SignUpForm />
      <p className="mt-4 text-center text-sm text-gray-400">
        ¿Ya tienes una cuenta?{' '}
        <Link href="/login" className="text-blue-500 hover:underline">Inicia Sesión</Link>
      </p>
    </div>
  );
}
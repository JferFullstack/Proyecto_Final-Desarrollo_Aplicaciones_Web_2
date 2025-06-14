import React from 'react';
import SignUpForm from './SignUpForm';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg mt-12">
      <h1 className="mb-6 text-center text-3xl font-bold text-white">Registrarse</h1>
      <SignUpForm />
      <p className="mt-4 text-center text-sm text-gray-400">
        ¿Ya tienes una cuenta?{' '}
        <Link href="/login" className="text-blue-500 hover:underline">Inicia Sesión</Link>
      </p>
    </div>
  );
}
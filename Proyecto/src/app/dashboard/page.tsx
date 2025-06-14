// src/app/dashboard/page.tsx
import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido al Dashboard!</h1>
      <p className="text-lg mb-8">Has iniciado sesión o te has registrado exitosamente.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Volver a Inicio
      </Link>
    </div>
  );
}
// src/app/(auth)/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autenticación',
  description: 'Páginas de inicio de sesión y registro',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`
      ${inter.className}
      flex min-h-screen items-center justify-center // Centra el contenido
      bg-gray-900 text-white // Fondo oscuro y texto blanco
    `}>
      {children}
    </div>
  );
}
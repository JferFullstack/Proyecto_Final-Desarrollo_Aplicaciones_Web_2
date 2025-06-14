// src/app/layout.tsx
import '../styles/global.css'; 
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tu Firma Legal',
  description: 'Asesoramiento legal con integridad y compromiso.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100 text-gray-900`}>
        <Navbar /> 
        <main className="flex-grow"> 
          {children} 
        </main>
        <Footer /> 
      </body>
    </html>
  );
}
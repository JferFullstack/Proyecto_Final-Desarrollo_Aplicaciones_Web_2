'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container flex items-center py-4 px-4 md:px-6 gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/legaliter-logo.jpg"
            alt="Logo Tu Firma Legal"
            width={44}
            height={44}
            className="rounded-md bg-white p-1"
            priority
          />
          <span className="font-bold text-lg hidden sm:inline">Tu Firma Legal</span>
        </Link>
        <ul className="flex gap-4 font-medium ml-4">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-blue-400 transition-colors">Iniciar Sesión</Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-blue-400 transition-colors">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
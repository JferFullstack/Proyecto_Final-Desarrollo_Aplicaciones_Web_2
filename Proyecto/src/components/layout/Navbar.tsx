// src/components/layout/Navbar.tsx
'use client'; 

import Link from 'next/link';
import Image from 'next/image'; 

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image
              src="/legaliter-logo.jpg" 
              alt="Logo Tu Firma Legal"
              width={100} 
              height={50} 
              className="h-10 w-auto" 
            />
          </Link>
        </div>
        <ul className="nav-menu"> 
          <li><Link href="/#home-section" className="hover:text-blue-400">Inicio</Link></li>
          <li><Link href="/#about-section" className="hover:text-blue-400">Acerca de Mí</Link></li>
          <li><Link href="/#cases-section" className="hover:text-blue-400">Casos</Link></li>
          <li><Link href="/login" className="text-blue-500 hover:underline">Sign In</Link></li>
          <li><Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link>+</li>
        </ul>
      </nav>
    </header>
  );
}
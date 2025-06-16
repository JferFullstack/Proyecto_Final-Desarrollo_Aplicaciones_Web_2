import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="logo">
             <Image
                src="/assets/legaliter-logo.jpg"
                alt="Sobre mí"
                width={100}
                height={50}
                className="about-img"
               />
          </div>
          <ul className="nav-menu">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link href="/signup">Registrarse</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
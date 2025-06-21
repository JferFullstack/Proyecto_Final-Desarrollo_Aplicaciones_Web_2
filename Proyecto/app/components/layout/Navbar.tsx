// frontend/components/layout/Navbar.tsx
'use client'; // This directive marks the component as a Client Component

import React from 'react';
import Link from 'next/link'; // We use Link from Next.js for navigation
import Image from 'next/image'; // Importamos el componente Image de Next.js

export default function Navbar() {
  return (
    // Añadimos la clase 'fixed-top' para hacer que el navbar se quede fijo en la parte superior
    // y la clase 'w-100' para asegurar que siempre ocupe el 100% del ancho del viewport.
    <nav className="navbar navbar-expand-lg navbar-dark bg-legaliter-dark-blue shadow-sm py-3 fixed-top w-100">
      <div className="container-fluid">
        {/* Logo al lado izquierdo: Ahora incluye la imagen */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/assets/legaliter-logo.jpg" // Ruta a tu imagen de logo
            alt="Legaliter & Asociados Logo"
            width={80} // Ajusta el ancho según sea necesario
            height={40} // Ajusta la altura según sea necesario
            className="me-2 rounded" // Clase de Bootstrap para margen derecho y redondeado
            priority // Carga la imagen con alta prioridad (es el logo principal)
          />
        </Link>

        {/* Botón de Hamburguesa para pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Bootstrap attribute for toggle
          data-bs-target="#navbarNav" // ID of the collapsible element
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido de la Barra de Navegación (links al lado derecho) */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup" className="nav-link">
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

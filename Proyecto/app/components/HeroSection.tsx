// frontend/components/HeroSection.tsx
'use client'; // Marcar como Client Component si hay interacciones o importaciones de cliente (como Link)

import React from 'react';
import Link from 'next/link'; // Para la navegación interna en Next.js

export default function HeroSection() {
  return (
    // Sección principal del héroe con fondo oscuro y centrado de contenido
    <section id="home-section" className="bg-dark text-white d-flex align-items-center justify-content-center py-5 vh-100 position-relative overflow-hidden">
      {/* Fondo hexagonal, ya definido en globals.css */}
      <div className="position-absolute inset-0 z-0 opacity-10 hex-pattern-global"></div>

      <div className="hero-content text-center text-md-start z-10 p-4 p-md-0 mx-auto" style={{ maxWidth: '700px' }}>
        {/* Título principal */}
        <h1 className="display-4 fw-bold mb-4">
          ¿Buscando asesoramiento legal calificado?
        </h1>
          <p className="lead mb-4 text-white ">
          Como abogada comprometida con la justicia y la honestidad, te ofrezco
          una atención personalizada, cercana y transparente. Estoy aquí para
          escucharte, orientarte y defender tus derechos con integridad.
          Mi misión es brindarte la confianza y el apoyo que necesitas en cada paso legal,
          transformando los desafíos en soluciones claras y efectivas.
          Tu tranquilidad es mi prioridad, y trabajaré incansablemente para
          lograr los mejores resultados en tu caso.
        </p>
      </div>

      {/* Estilos adicionales si fueran necesarios (aunque la mayoría se maneja con Bootstrap y globals.css) */}
      <style jsx>{`
        /* Puedes añadir estilos específicos aquí si no hay una clase de Bootstrap que haga lo que necesitas */
        .transition-hover:hover {
          transform: translateY(-2px); /* Pequeño efecto de elevación al pasar el ratón */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada al pasar el ratón */
        }
      `}</style>
    </section>
  );
}

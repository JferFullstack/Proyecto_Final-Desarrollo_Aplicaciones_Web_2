// frontend/components/AboutSection.tsx
'use client'; // Marcar como Componente Cliente si hay interactividad

import React from 'react';
import Image from 'next/image'; // Importar el componente Image de Next.js

export default function AboutSection() {
  return (
    <section id="about-section" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-4"> {/* g-4 para un buen espacio entre columnas */}
          {/* Columna para la imagen */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            {/* Contenedor para la imagen responsiva */}
            <div className="position-relative" style={{ width: '100%', maxWidth: '500px', height: 'auto', aspectRatio: '5/8' }}>
              <Image
                src="/assets/legaliter-logo.jpg"
                alt="Sobre mí - Legaliter & Asociados"
                fill // Hace que la imagen llene el contenedor padre
                style={{ objectFit: 'contain', borderRadius: '0.5rem' }} // CAMBIO: 'contain' para mostrar toda la imagen sin recortar
                className="shadow-lg"
                sizes="(max-width: 768px) 100vw, 500px" // Define el tamaño de la imagen en diferentes viewports
              />
            </div>
          </div>

          {/* Columna para el contenido de texto */}
          <div className="col-12 col-md-6">
            <h2 className="display-5 fw-bold mb-3 text-dark">
              Sobre <span className="text-primary">Legaliter</span> & Asociados
            </h2>
            <p className="lead text-secondary mb-4">
              En Legaliter, nos dedicamos a ofrecer asesoramiento legal y representación
              confiable, transparente y efectiva. Nuestra misión es guiarte a través
              de los complejos procesos legales con claridad y empatía.
            </p>
            <p className="text-muted">
              Contamos con un equipo de profesionales comprometidos con la excelencia
              y la justicia. Abordamos cada caso con la seriedad y el detalle que
              merece, buscando siempre las soluciones más favorables para nuestros clientes.
              Creemos firmemente en una comunicación abierta y en mantenerte
              informado en cada etapa de tu proceso legal.
            </p>
            <p className="text-muted">
              Ya sea que necesites asistencia en derecho civil, notarial,
              administrativo, penal o laboral, estamos aquí para proteger
              tus intereses y asegurar el mejor resultado posible.
            </p>
            {/* Puedes añadir un botón o un enlace a otra sección si es necesario */}
            {/* <Link href="#contact-section" className="btn btn-outline-primary mt-3">
              Contáctanos
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

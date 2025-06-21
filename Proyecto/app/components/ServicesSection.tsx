'use client'; // This directive marks the component as a Client Component

import React from 'react';
// The Image import is not needed if the image section is replaced with the new design.
// If you still have other images using Next/image, keep the import in their respective files.
// import Image from 'next/image';

export default function ServicesSection() {
  return (
    <>
      {/* Sección con el nuevo diseño de servicios (reemplazando la imagen y la sección anterior) */}
      {/* Usando clases de Bootstrap para la estructura y el estilo */}
      <section className="bg-dark text-white d-flex flex-column align-items-center justify-content-center py-5 px-3 position-relative overflow-hidden min-vh-100">
        {/* Hexagonal background pattern - will be defined in global.css */}
        <div className="position-absolute inset-0 z-0 opacity-10 hex-pattern-global"></div>

        <div className="position-relative z-10 w-100 mx-auto p-4 p-md-5 bg-black bg-opacity-75 rounded-3 shadow-lg border border-secondary">
          {/* Header Section: LEGALITER & ASOCIADOS */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-uppercase mb-1">
              LEGALITER
            </h1>
            <h2 className="fs-3 fw-light text-uppercase mb-4">
              & ASOCIADOS
            </h2>
            {/* Scales of Justice Icon (using inline SVG for simplicity and customizability) */}
            <div className="d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white" // Keep h-10 w-10 if Tailwind classes are still processed
                // Otherwise, use inline style or custom CSS for specific sizing
                style={{ width: '40px', height: '40px', color: 'white' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3 1.343 3 3v2l-3 3-3-3v-2c0-1.657 1.343-3 3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
              </svg>
            </div>
          </div>

          {/* Services and Matters Sections */}
          <div className="row justify-content-around g-4">
            {/* Services Section */}
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-dark border-secondary text-white shadow-sm p-4">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold mb-3 pb-2 border-bottom border-secondary">Servicios:</h3>
                  <ul className="list-unstyled space-y-2">
                    {[
                      'Declaración Jurada',
                      'Comerciante Individual',
                      'Limpieza de Antecedentes',
                      'Documentos Públicos',
                      'Divorcios',
                      'Escrituras Publicas'
                    ].map((service, index) => (
                      <li key={index} className="d-flex align-items-center fs-5">
                        <span className="text-info me-2">&bull;</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Matters Section (aligned with Services) */}
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-dark border-secondary text-white shadow-sm p-4">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold mb-3 pb-2 border-bottom border-secondary">Materia:</h3>
                  <ul className="list-unstyled space-y-2">
                    {[
                      'Notarial',
                      'Administrativa',
                      'Civil',
                      'Familia',
                      'Penal',
                      'Laboral'
                    ].map((matter, index) => (
                      <li key={index} className="d-flex align-items-center fs-5">
                        <span className="text-info me-2">&bull;</span>
                        {matter}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Legal Procedures (aligned with Matters) */}
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-dark border-secondary text-white shadow-sm p-4">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold mb-3 pb-2 border-bottom border-secondary"></h3> {/* No title for third box, as in image */}
                  <ul className="list-unstyled space-y-2">
                    {[
                      'Traspaso de Vehículos',
                      'Permisos de Salida',
                      'Declaración de Herederos',
                      'Demás tramites legales',
                      'y judiciales'
                    ].map((procedure, index) => (
                      <li key={index} className="d-flex align-items-center fs-5">
                        <span className="text-info me-2">&bull;</span>
                        {procedure}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La sección de servicios original (con íconos y texto) se mantiene debajo */}
      {/* Asegúrate de que las clases de esta sección también sean consistentes con Tailwind o Bootstrap */}
      <section className="services-section mb-5"> {/* mb-12 -> mb-5 for Bootstrap spacing */}
        <div className="container"> {/* Add container for Bootstrap grid */}
          <div className="row justify-content-center g-4"> {/* Use row and g-4 for gap */}
            <div className="col-12 col-md-4"> {/* Use col-md-4 for responsive grid */}
              <div className="card bg-white rounded-3 shadow-sm p-4 text-center"> {/* Use card for service-box */}
                <div className="icon display-6 mb-2">⚖️</div> {/* display-6 for larger icon text */}
                <h3 className="fw-bold fs-5 mb-2">Derecho Civil</h3> {/* fs-5 for font size */}
                <p>Resolución de conflictos familiares, herencias, contratos, etc.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card bg-white rounded-3 shadow-sm p-4 text-center">
                <div className="icon display-6 mb-2">📄</div>
                <h3 className="fw-bold fs-5 mb-2">Asesoramiento Legal</h3>
                <p>Análisis, redacción y revisión de documentos legales.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card bg-white rounded-3 shadow-sm p-4 text-center">
                <div className="icon display-6 mb-2">🛡️</div>
                <h3 className="fw-bold fs-5 mb-2">Defensa Legal</h3>
                <p>
                  Representación jurídica en procesos judiciales y administrativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

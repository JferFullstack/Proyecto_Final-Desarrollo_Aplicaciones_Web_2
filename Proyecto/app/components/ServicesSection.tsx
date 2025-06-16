import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <>
      <section className="servicios-section mb-12">
        <Image
          src="/assets/Servicios.png"
          alt="Nuestros servicios"
          width={800}
          height={400}
          className="Servicios-img"
        />
      </section>

      <section className="services-section mb-12">
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-box bg-white rounded-lg shadow-md p-6 text-center">
            <div className="icon text-3xl mb-2">⚖️</div>
            <h3 className="font-bold text-xl mb-1">Derecho Civil</h3>
            <p>Resolución de conflictos familiares, herencias, contratos, etc.</p>
          </div>
          <div className="service-box bg-white rounded-lg shadow-md p-6 text-center">
            <div className="icon text-3xl mb-2">📄</div>
            <h3 className="font-bold text-xl mb-1">Asesoramiento Legal</h3>
            <p>Análisis, redacción y revisión de documentos legales.</p>
          </div>
          <div className="service-box bg-white rounded-lg shadow-md p-6 text-center">
            <div className="icon text-3xl mb-2">🛡️</div>
            <h3 className="font-bold text-xl mb-1">Defensa Legal</h3>
            <p>
              Representación jurídica en procesos judiciales y administrativos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
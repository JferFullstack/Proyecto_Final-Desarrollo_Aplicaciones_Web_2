import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about-section" className="about-section mb-12">
      <div className="about-content">
        <h2 className="text-2xl font-bold mb-2">Sobre mí</h2>
        <p>
          Soy abogada con más de 10 años de experiencia en derecho civil y
          comercial. Mi enfoque es brindar un servicio legal de alta calidad,
          basado en la confianza y el compromiso con mis clientes.
        </p>
      </div>
      <Image
        src="/assets/legaliter-logo.jpg"
        alt="Sobre mí"
        width={500}
        height={300}
        className="about-img"
      />
    </section>
  );
}
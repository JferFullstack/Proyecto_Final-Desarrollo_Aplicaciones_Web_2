import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home-section" className="hero mb-12">
      <div className="hero-content">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ¿Buscando asesoramiento legal calificado?
        </h1>
        <p className="mb-6 text-lg">
          Como abogada comprometida con la justicia y la honestidad, te ofrezco
          una atención personalizada, cercana y transparente. Estoy aquí para
          escucharte, orientarte y defender tus derechos con integridad.
        </p>
        <Link href="#about-section" passHref>
          <button className="hero-button">Ver más</button>
        </Link>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>¿Buscando asesoramiento legal calificado?</h1>
          <p>
            Como abogada comprometida con la justicia y la honestidad, te
            ofrezco una atención personalizada, cercana y transparente. Estoy
            aquí para escucharte, orientarte y defender tus derechos con
            integridad...
          </p>
          <button className="hero-button">Ver más</button>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h2>Sobre mí</h2>
          <p>
            Soy abogada con más de 10 años de experiencia en derecho civil y
            comercial. Mi enfoque es brindar un servicio legal de alta calidad,
            basado en la confianza y el compromiso con mis clientes.
          </p>
        </div>
        <img
          src="/assets/legaliter-logo.jpg"
          alt="Sobre mí"
          className="about-img"
        />
      </section>

      <section className="servicios-section">
        <img
          src="/assets/servicios.png"
          alt="Nuestros servicios"
          className="servicios-img"
        />
      </section>

      <section className="example-cases">
        <div className="example-box">
          Cuadro con links hacia casos de ejemplo.
        </div>
      </section>

      <section className="form-section">
        <div className="form-grid">
          <div className="form-box">F1</div>
          <div className="form-box">F2</div>
          <div className="form-box">F3</div>
          <div className="form-box">F4</div>
          <div className="form-box">F5</div>
          <div className="form-box">F6</div>
        </div>
      </section>

      <section className="trusted-message">
        <div className="trusted-content">
          <p>
            “Mi compromiso es brindarte la tranquilidad de saber que estás siendo representado con honestidad, respeto y profesionalismo.”
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-grid">
          <div className="service-box">
            <div className="icon">⚖️</div>
            <h3>Derecho Civil</h3>
            <p>Resolución de conflictos familiares, herencias, contratos, etc.</p>
          </div>
          <div className="service-box">
            <div className="icon">📄</div>
            <h3>Asesoramiento Legal</h3>
            <p>Análisis, redacción y revisión de documentos legales.</p>
          </div>
          <div className="service-box">
            <div className="icon">🛡️</div>
            <h3>Defensa Legal</h3>
            <p>Representación jurídica en procesos judiciales y administrativos.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido al Dashboard!</h1>
      <p className="text-lg mb-8">Has iniciado sesión o te has registrado exitosamente.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Volver a Inicio
      </Link>
    </div>
  );
}
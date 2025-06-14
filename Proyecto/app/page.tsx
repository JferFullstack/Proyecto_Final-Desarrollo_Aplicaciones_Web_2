import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
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
          <Link href="#about-section">
            <button className="hero-button">Ver más</button>
          </Link>
        </div>
      </section>

      <section id="about-section" className="about-section mb-12">
        <div className="about-content">
          <h2 className="text-2xl font-bold mb-2">Sobre mí</h2>
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

      <section className="servicios-section mb-12">
        <img
          src="/assets/servicios.png"
          alt="Nuestros servicios"
          className="servicios-img"
        />
      </section>

      <section id="cases-section" className="example-cases mb-12">
        <div className="example-box">
          <h3 className="font-bold mb-2">Casos de ejemplo</h3>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li>
              <Link href="#">Divorcio y acuerdos familiares</Link>
            </li>
            <li>
              <Link href="#">Herencias y sucesiones</Link>
            </li>
            <li>
              <Link href="#">Contratos comerciales</Link>
            </li>
            <li>
              <Link href="#">Defensa en procesos judiciales</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="trusted-message mb-12">
        <div className="trusted-content">
          <p className="italic text-lg">
            “Mi compromiso es brindarte la tranquilidad de saber que estás siendo
            representado con honestidad, respeto y profesionalismo.”
          </p>
        </div>
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

export function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido al Dashboard!</h1>
      <p className="text-lg mb-8">
        Has iniciado sesión o te has registrado exitosamente.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Volver a Inicio
      </Link>
    </div>
  );
}
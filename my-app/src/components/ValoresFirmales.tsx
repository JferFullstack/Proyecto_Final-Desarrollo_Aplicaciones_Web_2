import React from 'react';
import './ValoresFirmales.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ValoresFirmales: React.FC = () => {
  const valores = [
    {
      titulo: 'Justicia primero',
      descripcion: 'Buscamos soluciones justas, no solo victorias.',
    },
    {
      titulo: 'Empatía legal',
      descripcion: 'Cada caso es una historia que merece ser escuchada.',
    },
    {
      titulo: 'Compromiso ético',
      descripcion: 'Nuestra prioridad: la integridad y tu bienestar.',
    },
    {
      titulo: 'Transparencia clara',
      descripcion: 'Te explicamos cada paso con honestidad y sencillez.',
    },
  ];

  return (
    <section className="valores-section">
      <div className="container py-5">
        <h2 className="valores-titulo-principal">
          Estamos comprometidos a administrar justicia, no solo a ganar casos
        </h2>
        <div className="row justify-content-center g-4">
          {valores.map((valor, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="valor-card h-100 p-4">
                <h3 className="fw-bold">{valor.titulo}</h3>
                <p>{valor.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValoresFirmales;


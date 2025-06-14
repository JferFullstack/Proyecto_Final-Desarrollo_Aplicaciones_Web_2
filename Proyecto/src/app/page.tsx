export default function Home() {
  return (
    <>
      <section className="hero">
        <div  id="home-section" className="hero-content">
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
        <div id="about-section" className="about-content">
          <h2>Sobre mí</h2>
          <p>
            Soy abogada con más de 10 años de experiencia en derecho civil y
            comercial. Mi enfoque es brindar un servicio legal de alta calidad,
            basado en la confianza y el compromiso con mis clientes.
          </p>
        </div>
        <img
          src="../public/about.jpg"
          alt="Sobre mí"
          className="about-img"
        />
      </section>
      
      <section className="servicios-section">
        <img
          src="/public/servicios.jpg"
          alt="Nuestros servicios"
          className="servicios-img"
        />
      </section>

      <section className="example-cases">
        <div className="example-box">
          Cuadro con links hacia casos de ejemplo.
        </div>
      </section>

      <section id="cases-section" className="form-section">
      <div className="form-grid">
        <div className="form-box">F1</div>
        <div className="form-box">F2</div>
        <div className="form-box">F3</div>
        <div className="form-box">F4</div>
        <div className="form-box">F5</div>
        <div className="form-box">F6</div>
      </div>
      </section>


    </>
  );
}
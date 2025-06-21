import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <section className="contact-section">
          <h2>Contáctame</h2>
          <form
            className="contact-form"
            method="POST"
            action="https://formspree.io/f/mzzgekpq"
          >
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="correo" placeholder="Tu correo" required />
            <textarea name="mensaje" placeholder="Escribe tu mensaje" rows={4} required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
        <div className="footer-info">
          <p>© 2025 Tu Firma Legal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
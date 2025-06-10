import './styles/global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tu Firma Legal',
  description: 'Asesoramiento legal con integridad y compromiso.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <div className="logo">
              <img
                src="/assets/legaliter-logo.jpg"
                alt="Logo Tu Firma Legal"
              />
            </div>
            <ul className="nav-menu">
              <li>Sección</li>
              <li>Sección</li>
              <li>Sección</li>
              <li>Sección</li>
              <li>Sección</li>
              <li>Sección</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
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
        </footer>
      </body>
    </html>
  );
}

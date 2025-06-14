import './styles/global.css';
import type { Metadata } from 'next';
import Link from 'next/link';

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
            <div className="container">
              <div className="logo">
                <img
                  src="/assets/legaliter-logo.jpg"
                  alt="Logo Tu Firma Legal"
                />
              </div>
              <ul className="nav-menu">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/login">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link href="/signup">Registrarse</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">{children}</div>
        </main>
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
      </body>
    </html>
  );
}

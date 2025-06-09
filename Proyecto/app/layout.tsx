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
          <p>© 2025 Tu Firma Legal. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

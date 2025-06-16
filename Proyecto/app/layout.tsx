import './styles/global.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BootstrapClient from './components/BootstrapClient';

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
        <Header /> 
        <main>
          <div className="container">{children}</div>
          <BootstrapClient /> 
        </main>
        <Footer /> 
      </body>
    </html>
  );
}
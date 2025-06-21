import './styles/global.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BootstrapClient from './components/BootstrapClient';
import WhatsAppButton from './components/WhatsAppButton';

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
        <Navbar />
        <main>
          {children}
        </main>
        <BootstrapClient />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
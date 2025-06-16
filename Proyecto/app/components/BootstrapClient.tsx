// app/components/BootstrapClient.tsx
'use client'; // ¡Esto es CRÍTICO! Declara que es un Client Component.

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Opcional: si quisieras recargar Bootstrap en cada cambio de ruta

export default function BootstrapClient() {
  const pathname = usePathname();

  useEffect(() => {
    // Importa el JavaScript de Bootstrap dinámicamente.
    // Esto asegura que window y document estén disponibles (solo en el cliente).
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, [pathname]); // Vuelve a cargar si la ruta cambia (útil para Single Page Applications)

  return null; // Este componente no renderiza nada visible, solo carga el JS.
}
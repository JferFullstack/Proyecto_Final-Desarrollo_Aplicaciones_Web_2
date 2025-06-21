// frontend/components/layout/DashboardLayout.tsx
'use client'; 

import React from 'react';
import { useRouter } from 'next/navigation';
import { removeAuthData } from '../utils/auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
  username: string; 
  role: string;     
}

export default function DashboardLayout({ children, username, role }: DashboardLayoutProps) {
  const router = useRouter();


  const handleLogout = () => {
    removeAuthData(); 
    router.push('/login'); 
  };

  const navItems = [
    { name: 'Mi Perfil', href: '/dashboard/profile' },
    { name: 'Mis Casos', href: '/dashboard/cases' },
    { name: 'Mis Documentos', href: '/dashboard/documents' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Cabecera del Dashboard */}
      <header className="bg-blue-800 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Legaliter Dashboard</h1>
        <div className="flex items-center space-x-4">
          {/* Muestra el nombre de usuario y el rol */}
          <span className="text-lg">Hola, {username} ({role})</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Contenido Principal del Dashboard (con barra lateral opcional) */}
      <div className="flex flex-1">
        {/* Barra Lateral (oculta en pantallas pequeñas, visible en md/lg) */}
        <aside className="w-64 bg-white p-4 shadow-lg hidden md:block">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 px-3 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition duration-150 ease-in-out"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Área donde se renderizará el contenido de la página */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      {/* Pie de Página del Dashboard */}
      <footer className="bg-gray-800 text-white p-4 text-center text-sm shadow-inner mt-auto">
        &copy; {new Date().getFullYear()} Legaliter. Todos los derechos reservados.
      </footer>
    </div>
  );
}

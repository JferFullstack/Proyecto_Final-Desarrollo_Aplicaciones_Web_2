// app/(auth)/login/page.tsx
// Si SignInForm no usa 'use client', este page.tsx también necesitaría 'use client'
// si usaras hooks o interactividad de React aquí directamente.
// Pero como SignInForm ya tiene 'use client', este page.tsx puede ser Server Component.

import SignInForm from './SignInForm';

export default function LoginPage() {
  return (
    <div className="container mt-5"> {/* Clase 'container' y 'mt-5' de Bootstrap */}
      <div className="card shadow p-4"> {/* Clase 'card', 'shadow', 'p-4' de Bootstrap */}
        <h2 className="text-center mb-4 text-primary">Iniciar Sesión</h2> {/* Clases de Bootstrap */}
        <SignInForm />
      </div>
    </div>
  );
}
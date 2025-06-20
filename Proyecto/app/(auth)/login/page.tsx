// app/(auth)/login/page.tsx

import SignInForm from './SignInForm';

export default function LoginPage() {
  return (
    <div className="container mt-5"> 
      <div className="card shadow p-4"> 
        <h2 className="text-center mb-4 text-primary">Iniciar Sesión</h2> 
        <SignInForm />
      </div>
    </div>
  );
}
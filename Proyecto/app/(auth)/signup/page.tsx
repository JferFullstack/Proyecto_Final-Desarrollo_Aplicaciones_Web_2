// app/(auth)/signup/page.tsx
import SignUpForm from './SignUpForm';

export default function SignupPage() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4 text-primary">Registrarse</h2>
        <SignUpForm />
      </div>
    </div>
  );
}
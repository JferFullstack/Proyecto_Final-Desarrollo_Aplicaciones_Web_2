import React from 'react';
import Link from 'next/link';

import SignInForm from './SignInForm';



export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/assets/legaliter-logo.jpg"
            alt="Logo Tu Firma Legal"
            className="w-16 h-16 rounded-md bg-white p-1 mb-2"
          />
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
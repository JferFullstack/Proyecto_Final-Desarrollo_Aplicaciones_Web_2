import React from 'react';
import Link from 'next/link';

export default function CasesSection() {
  return (
    <section id="cases-section" className="example-cases mb-12">
      <div className="example-box">
        <h3 className="font-bold mb-2">Casos de ejemplo</h3>
        <ul className="list-disc list-inside text-left mx-auto max-w-md">
          <li>
            <Link href="#">Divorcio y acuerdos familiares</Link>
          </li>
          <li>
            <Link href="#">Herencias y sucesiones</Link>
          </li>
          <li>
            <Link href="#">Contratos comerciales</Link>
          </li>
          <li>
            <Link href="#">Defensa en procesos judiciales</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
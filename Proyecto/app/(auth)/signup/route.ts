import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const usersFile = path.join(process.cwd(), 'app/lib/users.json');

export async function GET() {
  return NextResponse.json({ message: 'Signup GET endpoint activo' });
}

export async function POST(request: Request) {
  const { username, email, password } = await request.json();
  if (!username || !email || !password || password.length < 6) {
    return NextResponse.json({ success: false, message: 'Datos inválidos' }, { status: 400 });
  }

  // Leer usuarios existentes
  const usersRaw = await fs.readFile(usersFile, 'utf-8');
  const users = JSON.parse(usersRaw);

  // Verificar si el usuario ya existe
  if (users.find((u: any) => u.username === username || u.email === email)) {
    return NextResponse.json({ success: false, message: 'Usuario o correo ya registrado' }, { status: 400 });
  }

  // Guardar nuevo usuario
  users.push({ username, email, password });
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

  return NextResponse.json({ success: true, message: 'Registro exitoso' });
}
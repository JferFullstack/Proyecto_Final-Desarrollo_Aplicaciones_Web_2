import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const usersFile = path.join(process.cwd(), 'app/lib/users.json');

export async function GET() {
  return NextResponse.json({ message: 'Login GET endpoint activo' });
}

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({ success: false, message: 'Faltan datos' }, { status: 400 });
  }

  // Leer usuarios existentes
  const usersRaw = await fs.readFile(usersFile, 'utf-8');
  const users = JSON.parse(usersRaw);

  // Buscar usuario
  const user = users.find((u: any) => u.username === username && u.password === password);

  if (user) {
    return NextResponse.json({ success: true, message: 'Login exitoso' });
  }
  return NextResponse.json({ success: false, message: 'Usuario o contraseña incorrectos' }, { status: 401 });
}


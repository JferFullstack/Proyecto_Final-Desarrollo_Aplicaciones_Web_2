import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const usersFile = path.join(process.cwd(), 'app/lib/users.json');

export async function GET() {
  return NextResponse.json({ message: 'Login GET endpoint activo' });
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ success: false, message: 'Faltan datos' }, { status: 400 });
    }

    let users = [];
    try {
      const usersRaw = await fs.readFile(usersFile, 'utf-8');
      users = JSON.parse(usersRaw);
    } catch {
      users = [];
    }

    const user = users.find((u: any) => u.username === username && u.password === password);

    if (user) {
      return NextResponse.json({ success: true, message: 'Login exitoso' });
    }
    return NextResponse.json({ success: false, message: 'Usuario o contraseña incorrectos' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, message: 'Error en el servidor' }, { status: 500 });
  }
}


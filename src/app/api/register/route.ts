import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Логіка для реєстрації
  if (email && password) {
    return NextResponse.json({ message: "Registration successful" }, { status: 201 });
  } else {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
}
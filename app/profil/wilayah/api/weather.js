import { NextResponse } from "next/server";

export async function GET() {
  const lat = -7.864;
  const lon = 112.414;
  const apiKey = process.env.OPENWEATHER_API_KEY; // TANPA NEXT_PUBLIC biar rahasia

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=id`
  );
  const data = await res.json();

  return NextResponse.json(data);
}

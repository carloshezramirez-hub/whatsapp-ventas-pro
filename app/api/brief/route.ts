import { NextResponse } from "next/server";

/**
 * Recibe el formulario post-pago y lo reenvía al Web App de Google Apps Script
 * (que escribe en tu Google Sheet). La URL vive solo en el servidor.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const url = process.env.SHEET_WEBHOOK_URL;
    if (!url) {
      return NextResponse.json(
        { error: "Almacenamiento no configurado." },
        { status: 500 },
      );
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    if (!res.ok) throw new Error();

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo guardar la información." },
      { status: 500 },
    );
  }
}

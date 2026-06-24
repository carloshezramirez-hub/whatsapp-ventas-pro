import { NextResponse } from "next/server";
import { getStripe, priceIds } from "@/lib/stripe";
import { isPlanId } from "@/lib/config";

export async function POST(req: Request) {
  try {
    const { plan } = await req.json();

    if (!plan || !isPlanId(plan)) {
      return NextResponse.json({ error: "Paquete inválido." }, { status: 400 });
    }

    const price = priceIds[plan];
    if (!price) {
      return NextResponse.json(
        { error: "Paquete no disponible." },
        { status: 400 },
      );
    }

    const origin =
      req.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "https://TU-DOMINIO.com";

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [{ price, quantity: 1 }],
      metadata: { plan },
      success_url: `${origin}/brief/${plan}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#planes`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "No se pudo iniciar el pago." },
      { status: 500 },
    );
  }
}

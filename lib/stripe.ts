import Stripe from "stripe";
import type { PlanId } from "./config";

/** Cliente de Stripe (solo servidor). Inicialización diferida. */
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY no está configurada.");
    _stripe = new Stripe(key, { apiVersion: "2024-06-20" });
  }
  return _stripe;
}

/** Price IDs por paquete (solo servidor). */
export const priceIds: Record<PlanId, string | undefined> = {
  express: process.env.STRIPE_PRICE_EXPRESS,
  pro: process.env.STRIPE_PRICE_PRO,
  completo: process.env.STRIPE_PRICE_COMPLETO,
};

/**
 * Verifica que una sesión de Stripe esté pagada y corresponda al paquete.
 * Devuelve true solo si el pago se completó para ese paquete.
 */
export async function isPaidSession(
  sessionId: string,
  plan: PlanId,
): Promise<boolean> {
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    return (
      session.payment_status === "paid" && session.metadata?.plan === plan
    );
  } catch {
    return false;
  }
}

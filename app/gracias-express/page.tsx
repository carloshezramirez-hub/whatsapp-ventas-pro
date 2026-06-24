import type { Metadata } from "next";
import ThankYou from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Gracias por tu compra — Express",
  robots: { index: false, follow: false },
};

/*
  ──────────────────────────────────────────────────────────────────────
  Stripe debe redirigir aquí tras un pago exitoso del plan Express:
    https://TU-DOMINIO.com/gracias-express

  TRACKING DE CONVERSIÓN (opcional): este es el lugar donde más adelante
  podrías agregar el evento de conversión (Meta/GA/GTM). NO se implementa
  lógica de pago aquí: el pago ocurre en Stripe y la entrega del producto
  se hace por email automático externo.
  ──────────────────────────────────────────────────────────────────────
*/
export default function GraciasExpressPage() {
  return <ThankYou planName="Express" />;
}

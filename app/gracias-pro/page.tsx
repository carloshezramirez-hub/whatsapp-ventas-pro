import type { Metadata } from "next";
import ThankYou from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Gracias por tu compra — Pro",
  robots: { index: false, follow: false },
};

/*
  ──────────────────────────────────────────────────────────────────────
  Stripe debe redirigir aquí tras un pago exitoso del plan Pro:
    https://TU-DOMINIO.com/gracias-pro

  TRACKING DE CONVERSIÓN (opcional): lugar para el evento de conversión
  (Meta/GA/GTM) más adelante. NO se implementa lógica de pago aquí.
  ──────────────────────────────────────────────────────────────────────
*/
export default function GraciasProPage() {
  return <ThankYou planName="Pro" />;
}

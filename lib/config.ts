/**
 * Configuración central del sitio.
 *
 * Todos los valores se leen de variables de entorno NEXT_PUBLIC_* y tienen
 * un fallback con placeholders, para que el sitio funcione localmente
 * antes de tener dominio y links de Stripe reales.
 *
 * Reemplaza los valores definiendo .env.local (ver .env.example).
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://TU-DOMINIO.com";

export const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "soporte@TU-DOMINIO.com";

export const stripeLinks = {
  // Reemplazar este link cuando tengas tus Stripe Payment Links reales.
  express:
    process.env.NEXT_PUBLIC_STRIPE_EXPRESS_LINK ??
    "https://buy.stripe.com/PLACEHOLDER_EXPRESS",
  // Reemplazar este link cuando tengas tus Stripe Payment Links reales.
  pro:
    process.env.NEXT_PUBLIC_STRIPE_PRO_LINK ??
    "https://buy.stripe.com/PLACEHOLDER_PRO",
  // Reemplazar este link cuando tengas tus Stripe Payment Links reales.
  completo:
    process.env.NEXT_PUBLIC_STRIPE_COMPLETO_LINK ??
    "https://buy.stripe.com/PLACEHOLDER_COMPLETO",
} as const;

export const productName = "Sistema WhatsApp Ventas Pro";

export const legalDisclaimer =
  "Este producto no está afiliado, asociado ni respaldado por WhatsApp, Meta, Facebook ni Instagram. Todas las marcas mencionadas pertenecen a sus respectivos dueños.";

export type PlanId = "express" | "pro" | "completo";

export interface Plan {
  id: PlanId;
  name: string;
  price: string;
  priceNumber: number;
  subtitle: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
  href: string;
  highlight?: "popular" | "value";
}

export const plans: Plan[] = [
  {
    id: "express",
    name: "Express",
    price: "$129 MXN",
    priceNumber: 129,
    subtitle: "Para responder más rápido desde hoy",
    features: [
      "50 respuestas rápidas listas para copiar",
      "10 mensajes de cierre",
      "10 mensajes de seguimiento",
      "Sistema básico de etiquetas",
      "Mini guía para configurar WhatsApp Business",
    ],
    ctaLabel: "Comprar Express — $129",
    href: stripeLinks.express,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$249 MXN",
    priceNumber: 249,
    subtitle: "Para organizar clientes y dar seguimiento",
    badge: "Más vendido",
    highlight: "popular",
    features: [
      "Todo lo del plan Express",
      "CRM en Google Sheets",
      "100 respuestas rápidas",
      "Scripts completos de conversación",
      "Pipeline de ventas",
      "Calendario de seguimiento de 7 días",
      "Calculadora básica de ventas",
    ],
    ctaLabel: "Comprar Pro — $249",
    href: stripeLinks.pro,
  },
  {
    id: "completo",
    name: "Completo",
    price: "$499 MXN",
    priceNumber: 499,
    subtitle: "Para tener el sistema completo de ventas por WhatsApp",
    badge: "Mejor valor",
    highlight: "value",
    features: [
      "Todo lo del plan Pro",
      "CRM avanzado con dashboard",
      "Sistema de seguimiento de 30 días",
      "Pack de recuperación de clientes",
      "Scripts por tipo de negocio",
      "30 textos para estados de WhatsApp",
      "Sistema de promociones",
      "Mensajes de postventa y referidos",
      "Plantilla de link de bio",
    ],
    ctaLabel: "Comprar Completo — $499",
    href: stripeLinks.completo,
  },
];

export function getPlan(id: PlanId): Plan {
  const plan = plans.find((p) => p.id === id);
  if (!plan) throw new Error(`Plan no encontrado: ${id}`);
  return plan;
}

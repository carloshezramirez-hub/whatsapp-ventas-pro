/**
 * Configuración central del sitio.
 * Los valores públicos usan variables NEXT_PUBLIC_* con fallback de placeholder.
 * Las claves de Stripe (secretas y price IDs) se leen solo en el servidor.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://TU-DOMINIO.com";

export const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "contact@stoutlab.com";

export const formspreeEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
  "https://formspree.io/f/PLACEHOLDER";

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
  highlight?: "popular" | "value";
}

export const plans: Plan[] = [
  {
    id: "express",
    name: "Express",
    price: "$129 MXN",
    priceNumber: 129,
    subtitle: "Para mejorar tus respuestas básicas por WhatsApp.",
    features: [
      "50 respuestas listas adaptadas a tu negocio",
      "Mensajes para precios y dudas comunes",
      "Mensajes de cierre",
      "Mensajes de seguimiento básicos",
      "Recomendaciones simples para organizar clientes",
    ],
    ctaLabel: "Comprar Express — $129",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$249 MXN",
    priceNumber: 249,
    subtitle: "Para responder mejor, dar seguimiento y vender con más orden.",
    badge: "Más elegido",
    highlight: "popular",
    features: [
      "Todo lo de Express",
      "100 respuestas adaptadas a tu negocio",
      "Mensajes para clientes indecisos",
      "Seguimiento de 7 días",
      "Ideas de promociones para tu mercado",
      "Guía simple para organizar tus conversaciones",
    ],
    ctaLabel: "Comprar Pro — $249",
  },
  {
    id: "completo",
    name: "Completo",
    price: "$499 MXN",
    priceNumber: 499,
    subtitle: "Para recibir una guía más completa y específica para tu negocio.",
    badge: "Más completo",
    highlight: "value",
    features: [
      "Todo lo de Pro",
      "Mensajes por tipo de cliente",
      "Seguimiento de 30 días",
      "Mensajes para recuperar clientes",
      "Textos para estados de WhatsApp",
      "Ideas de promociones y combos",
      "Mensajes de postventa y referidos",
      "Recomendaciones para vender mejor según tu mercado",
    ],
    ctaLabel: "Comprar Completo — $499",
  },
];

export function getPlan(id: string): Plan | undefined {
  return plans.find((p) => p.id === id);
}

export function isPlanId(value: string): value is PlanId {
  return plans.some((p) => p.id === value);
}

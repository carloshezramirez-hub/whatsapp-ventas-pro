# Sistema WhatsApp Ventas Pro

Landing profesional para vender guías personalizadas de ventas por WhatsApp.

El cliente elige un paquete, paga con Stripe y completa un formulario para recibir un documento personalizado en máximo 24 horas.

## Producto

Guías personalizadas con mensajes de venta, seguimiento, respuestas para clientes y recomendaciones simples para negocios que venden por WhatsApp.

## Flujo

Landing → Stripe Checkout → Formulario post-pago → Entrega personalizada en 24 horas

## Paquetes

- Express — $129 MXN
- Pro — $249 MXN
- Completo — $499 MXN

## Tecnología

Next.js, TypeScript, Tailwind CSS, Stripe y Formspree.

## Estado

Versión lista para producción.

Variables necesarias:

- STRIPE_SECRET_KEY
- STRIPE_PRICE_EXPRESS
- STRIPE_PRICE_PRO
- STRIPE_PRICE_COMPLETO
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_SUPPORT_EMAIL
- NEXT_PUBLIC_FORMSPREE_ENDPOINT

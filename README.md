# Sistema WhatsApp Ventas Pro — Landing

Landing page de una sola página para vender el producto digital
**Sistema WhatsApp Ventas Pro**, construida con Next.js (App Router),
TypeScript y Tailwind CSS. Sin backend, sin base de datos, sin login.

Los botones de compra envían directamente a **Stripe Payment Links**.
Todo viene con **placeholders** listos para reemplazar.

---

## 1. Instalar dependencias

```bash
npm install
```

## 2. Ejecutar en local

```bash
npm run dev
```

Abre: http://localhost:3000

## 3. Configurar variables de entorno

Copia `.env.example` a `.env.local` y reemplaza los valores:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SITE_URL=https://TU-DOMINIO.com
NEXT_PUBLIC_SUPPORT_EMAIL=soporte@TU-DOMINIO.com
NEXT_PUBLIC_STRIPE_EXPRESS_LINK=https://buy.stripe.com/PLACEHOLDER_EXPRESS
NEXT_PUBLIC_STRIPE_PRO_LINK=https://buy.stripe.com/PLACEHOLDER_PRO
NEXT_PUBLIC_STRIPE_COMPLETO_LINK=https://buy.stripe.com/PLACEHOLDER_COMPLETO
```

> Si no defines `.env.local`, el sitio usa los placeholders de fallback en
> `lib/config.ts` y funciona igual para desarrollo.

## 4. Probar localmente

http://localhost:3000

## 5. Hacer build

```bash
npm run build
```

## 6. Inicializar git

```bash
git init
git add .
git commit -m "Initial landing page"
```

## 7. Conectar con GitHub

```bash
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

## 8. Deploy en Vercel

1. Importar el repositorio desde GitHub en https://vercel.com
2. Framework: **Next.js** (se detecta automáticamente)
3. Agregar las mismas variables de entorno (las de `.env.local`) en
   **Project Settings → Environment Variables**
4. Deploy

## 9. Cuando tengas dominio

- Reemplaza `NEXT_PUBLIC_SITE_URL`
- Reemplaza `NEXT_PUBLIC_SUPPORT_EMAIL`
- Configura el dominio en Vercel (Settings → Domains)
- Actualiza la metadata si aplica

## 10. Cuando tengas los Stripe Payment Links

- Reemplaza `NEXT_PUBLIC_STRIPE_EXPRESS_LINK`
- Reemplaza `NEXT_PUBLIC_STRIPE_PRO_LINK`
- Reemplaza `NEXT_PUBLIC_STRIPE_COMPLETO_LINK`
- Configura la redirección post-pago en cada Payment Link de Stripe
  (campo *After payment → Redirect customers to your website*):

  | Plan     | URL de redirección                          |
  | -------- | ------------------------------------------- |
  | Express  | `https://TU-DOMINIO.com/gracias-express`    |
  | Pro      | `https://TU-DOMINIO.com/gracias-pro`        |
  | Completo | `https://TU-DOMINIO.com/gracias-completo`   |

## 11. Automatización de la entrega

El acceso al producto se envía por **email automático externo**.
Conecta Stripe con Make / Zapier / Brevo / Gmail usando el evento de
**pago exitoso** (`checkout.session.completed` o el trigger de tu herramienta)
para enviar automáticamente el correo con el acceso.

> La web **no** procesa pagos ni entrega el producto. Solo envía a Stripe.

---

## Estructura del proyecto

```
app/
  layout.tsx            Metadata, SEO, OpenGraph y huecos para tracking
  page.tsx              Landing de una sola página
  globals.css           Estilos base (Tailwind)
  gracias-express/      Página de gracias (Express)
  gracias-pro/          Página de gracias (Pro)
  gracias-completo/     Página de gracias (Completo)
  terminos/             Términos y condiciones
  privacidad/           Política de privacidad
components/             Header, Hero, Benefits, HowItWorks, PricingCard, FAQ, Footer...
lib/config.ts           Configuración central (dominio, email, Stripe, planes)
```

## Tracking (opcional)

En `app/layout.tsx` hay comentarios donde insertar **Meta Pixel**,
**Google Analytics** y **Google Tag Manager**.

- En la landing **no** se dispara el evento `Purchase` (la compra ocurre en Stripe).
- En las páginas `gracias-*` hay comentarios donde puedes agregar el evento de
  conversión más adelante. No hay lógica de pago falsa.

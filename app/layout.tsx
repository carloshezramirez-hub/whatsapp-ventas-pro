import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteUrl } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sistema WhatsApp Ventas Pro",
  description:
    "Guía personalizada con respuestas, seguimiento y mensajes de venta para tu negocio en WhatsApp. Pago único y entrega en máximo 24 horas.",
  openGraph: {
    title: "Sistema WhatsApp Ventas Pro",
    description:
      "Compra tu guía personalizada de ventas por WhatsApp. La adaptamos a tu negocio y te la enviamos en máximo 24 horas.",
    type: "website",
    url: siteUrl,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      {/*
        ───────────────────────────────────────────────────────────────
        TRACKING (opcional). Pega aquí tus scripts cuando los tengas:

        • Meta Pixel:        <script> ... fbq('init','PIXEL_ID') ... </script>
        • Google Analytics:  <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" />
        • Google Tag Manager: snippet en <head> y <noscript> tras <body>

        Recomendación: usa next/script con strategy="afterInteractive".
        NO dispares el evento "Purchase" aquí. La compra ocurre en Stripe.
        ───────────────────────────────────────────────────────────────
      */}
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}

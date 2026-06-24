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
    "Sistema digital con respuestas rápidas, CRM en Google Sheets y scripts para organizar ventas por WhatsApp.",
  openGraph: {
    title: "Sistema WhatsApp Ventas Pro",
    description:
      "Organiza tus conversaciones, respuestas y seguimiento de clientes por WhatsApp.",
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

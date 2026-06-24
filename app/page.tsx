import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BuyButton from "@/components/BuyButton";
import { plans, getPlan } from "@/lib/config";

function CheckBadge() {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function CheckLine() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-none text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const recibes = [
  {
    title: "Respuestas para clientes",
    text: "Mensajes para precios, dudas, descuentos y seguimiento.",
  },
  {
    title: "Mensajes de seguimiento",
    text: "Textos para volver a contactar a quienes preguntaron y no compraron.",
  },
  {
    title: "Ideas para vender mejor",
    text: "Promociones y mensajes adaptados a tu tipo de negocio.",
  },
  {
    title: "Organización simple",
    text: "Recomendaciones para ordenar clientes, pedidos y próximos mensajes.",
  },
  {
    title: "Guía personalizada",
    text: "La adaptamos según tu mercado, producto y necesidades.",
  },
];

const despuesBullets = [
  "Nombre de tu negocio",
  "Qué vendes",
  "Tipo de cliente",
  "Dudas frecuentes",
  "Qué quieres mejorar en tus ventas por WhatsApp",
];

export default function HomePage() {
  // Orden móvil: Pro, Completo, Express
  const pro = getPlan("pro")!;
  const completo = getPlan("completo")!;
  const express = getPlan("express")!;
  const mobileOrder = [pro, completo, express];

  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Qué vas a recibir */}
        <section id="que-recibes" className="section bg-surface-soft">
          <div className="container-content">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Qué vas a recibir</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Recibes una guía lista para usar
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recibes.map((item) => (
                <div key={item.title} className="card p-6">
                  <CheckBadge />
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Paquetes */}
        <section id="planes" className="section bg-white">
          <div className="container-content">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Paquetes</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Elige tu paquete
              </h2>
              <p className="mt-4 text-lg text-ink-soft">
                Pago único. Después de pagar llenas un formulario y recibes tu
                documento personalizado en máximo 24 horas.
              </p>
            </div>

            {/* Desktop: Express | Pro | Completo */}
            <div className="mt-14 hidden items-stretch gap-6 lg:grid lg:grid-cols-3">
              {plans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>

            {/* Móvil/tablet: Pro, Completo, Express */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
              {mobileOrder.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Después del pago */}
        <section className="section bg-surface-soft">
          <div className="container-content">
            <div className="mx-auto max-w-3xl rounded-3xl border border-surface-line bg-white p-8 shadow-soft sm:p-12">
              <div className="text-center">
                <span className="eyebrow">Después del pago</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
                  Cuéntanos de tu negocio
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Te llevaremos a un formulario corto para conocer tu negocio.
                  Con esa información preparamos tu documento personalizado y te
                  lo enviamos en máximo 24 horas.
                </p>
              </div>

              <ul className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                {despuesBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                    <CheckLine />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex justify-center">
                <BuyButton plan="pro" label="Comprar Pro — $249" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA final */}
        <section className="section bg-white">
          <div className="container-content">
            <div className="mx-auto max-w-3xl rounded-3xl bg-ink p-8 text-center sm:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Compra tu guía personalizada y vende con más orden por WhatsApp
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Elige tu paquete, paga con Stripe y llena el formulario para
                preparar tu documento.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BuyButton plan="pro" label="Comprar Pro — $249" />
                <a
                  href="#planes"
                  className="btn border border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  Ver paquetes
                </a>
              </div>
              <p className="mt-4 text-xs text-white/60">Pago seguro con Stripe</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Barra fija móvil */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface-line bg-white/95 p-3 backdrop-blur-md md:hidden">
        <BuyButton plan="pro" label="Comprar Pro — $249" className="btn-primary w-full" />
      </div>
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}

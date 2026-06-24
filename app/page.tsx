import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { plans, getPlan } from "@/lib/config";

/* Iconos simples y neutros para "Qué incluye" */
function FeatureIcon() {
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

const includes = [
  { title: "Respuestas rápidas", text: "Mensajes listos para copiar y pegar." },
  { title: "Scripts de conversación", text: "Guías para vender sin improvisar." },
  { title: "CRM en Google Sheets", text: "Organiza clientes sin pagar un CRM caro." },
  { title: "Sistema de etiquetas", text: "Clasifica cada conversación con claridad." },
  { title: "Seguimiento de clientes", text: "Da seguimiento sin olvidar conversaciones." },
  { title: "Promociones listas", text: "Plantillas para tus ofertas." },
  { title: "Mensajes para estados", text: "Textos para publicar en tus estados." },
  { title: "Postventa y referidos", text: "Mantén la relación después de la venta." },
];

export default function HomePage() {
  // Orden móvil pedido: Pro, Completo, Express
  const pro = getPlan("pro");
  const completo = getPlan("completo");
  const express = getPlan("express");
  const mobileOrder = [pro, completo, express];

  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* 3. Problema */}
        <section className="section bg-surface-soft">
          <div className="container-content max-w-3xl text-center">
            <span className="eyebrow">El reto</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              WhatsApp es práctico, pero se desordena rápido
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Cuando llegan preguntas, cotizaciones y clientes interesados, es
              fácil perder el seguimiento. Este sistema te ayuda a tener
              respuestas listas, etiquetas claras y una hoja simple para
              organizar cada conversación.
            </p>
          </div>
        </section>

        {/* 4. Qué incluye */}
        <section id="que-incluye" className="section bg-white">
          <div className="container-content">
            <div className="max-w-2xl">
              <span className="eyebrow">Qué incluye</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Todo lo que necesitas para ordenar tus ventas
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {includes.map((item) => (
                <div key={item.title} className="card p-6">
                  <FeatureIcon />
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Planes */}
        <section id="planes" className="section bg-surface-soft">
          <div className="container-content">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Planes</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Elige el sistema que necesitas hoy
              </h2>
              <p className="mt-4 text-lg text-ink-soft">
                Todos los planes son de pago único, con acceso inmediato al
                correo usado en la compra.
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

        {/* 6. Cómo funciona */}
        <HowItWorks />

        {/* 7. Ejemplo práctico (antes / después) */}
        <section className="section bg-surface-soft">
          <div className="container-content">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Ejemplo práctico</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                La diferencia se nota en la primera respuesta
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
              {/* Antes */}
              <div className="card p-6">
                <span className="inline-flex rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-ink-muted">
                  Antes
                </span>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-surface-soft px-4 py-2.5 text-sm text-ink-soft">
                      Hola, ¿cuánto cuesta?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-ink/5 px-4 py-2.5 text-sm text-ink-soft">
                      Hola, depende, ¿qué necesitas?
                    </div>
                  </div>
                </div>
              </div>

              {/* Después */}
              <div className="card border-brand-100 p-6">
                <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  Después
                </span>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-surface-soft px-4 py-2.5 text-sm text-ink-soft">
                      Hola, ¿cuánto cuesta?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[88%] rounded-2xl rounded-tr-md bg-brand-600 px-4 py-2.5 text-sm text-white">
                      Hola 👋 Claro. Tenemos estas opciones: [opción 1],
                      [opción 2] y [opción 3]. La más recomendada para ti sería
                      [opción]. ¿Quieres que te pase disponibilidad y forma de
                      pago?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-soft">
              Además, el sistema incluye mensajes de seguimiento para
              conversaciones que quedan pendientes.
            </p>
          </div>
        </section>

        {/* 8. Beneficios */}
        <Benefits />

        {/* 9. Garantía */}
        <section className="section bg-white">
          <div className="container-content">
            <div className="mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-brand-50/60 p-8 text-center sm:p-12">
              <span className="flex mx-auto h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink">
                Compra con tranquilidad
              </h2>
              <p className="mt-4 text-lg text-ink-soft">
                Si el sistema no es lo que esperabas, puedes solicitar reembolso
                dentro de los primeros 7 días.
              </p>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. CTA final */}
        <section className="section bg-white">
          <div className="container-content">
            <div className="mx-auto max-w-3xl rounded-3xl bg-ink p-8 text-center sm:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Empieza hoy con un sistema simple para vender por WhatsApp
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Elige tu plan, paga con Stripe y recibe el acceso automáticamente
                en tu correo.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {/* Reemplazar este link cuando tengas tus Stripe Payment Links reales. */}
                <a href={pro.href} className="btn-primary">
                  {pro.ctaLabel}
                </a>
                {/* Reemplazar este link cuando tengas tus Stripe Payment Links reales. */}
                <a
                  href={completo.href}
                  className="btn border border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  {completo.ctaLabel}
                </a>
              </div>
              <p className="mt-4 text-xs text-white/60">Pago seguro con Stripe</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Barra fija móvil con botón "Ver planes" */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface-line bg-white/95 p-3 backdrop-blur-md md:hidden">
        <a href="#planes" className="btn-primary w-full">
          Ver planes
        </a>
      </div>
      {/* Espaciador para que la barra fija no tape el footer en móvil */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}

import WhatsAppMockup from "./WhatsAppMockup";
import BuyButton from "./BuyButton";

const bullets = [
  "Hecho para tu mercado y negocio",
  "Documento personalizado en máximo 24 horas",
  "Mensajes listos para copiar y usar",
  "Ideal para negocios que venden por WhatsApp",
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-none text-brand-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 to-white" />

      <div className="container-content grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow">Guía personalizada para tu negocio</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Vende mejor por WhatsApp con mensajes hechos para tu negocio
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Después de tu compra, llenas un formulario corto y preparamos una
            guía personalizada con respuestas, seguimiento y mensajes de venta
            para tu tipo de negocio.
          </p>

          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-ink-soft">
                <CheckIcon />
                <span className="text-[15px]">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#planes" className="btn-secondary order-2 sm:order-1">
              Ver paquetes
            </a>
            <span className="order-1 sm:order-2">
              <BuyButton plan="pro" label="Comprar Pro — $249" />
            </span>
          </div>
          <p className="mt-3 text-sm text-ink-muted">
            Después del pago llenarás un formulario para personalizar tu guía.
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-100/50 blur-2xl" />
            <WhatsAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

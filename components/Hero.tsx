import WhatsAppMockup from "./WhatsAppMockup";

const bullets = [
  "Acceso inmediato",
  "Listo para copiar y pegar",
  "Funciona con WhatsApp Business",
  "Ideal para negocios pequeños",
  "Sin pagar un CRM caro",
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

      <div className="container-content grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow">Producto digital · Acceso inmediato</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Organiza tus ventas por WhatsApp en menos de 30 minutos
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Respuestas listas, seguimiento de clientes, CRM en Google Sheets y
            scripts para vender sin improvisar.
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
            <a href="#planes" className="btn-primary">
              Elegir mi plan
            </a>
            <a href="#que-incluye" className="btn-secondary">
              Ver qué incluye
            </a>
          </div>
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

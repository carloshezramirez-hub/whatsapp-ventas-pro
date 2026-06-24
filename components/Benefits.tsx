const benefits = [
  "Responde más rápido",
  "Ordena tus clientes",
  "Da seguimiento",
  "Usa etiquetas claras",
  "Ten mensajes listos",
  "Controla tus oportunidades",
  "Ahorra tiempo respondiendo",
  "Mejora tu proceso comercial",
];

function DotIcon() {
  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600">
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

export default function Benefits() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="eyebrow">Beneficios</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Lo que cambia en tu día a día
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b} className="card flex items-center gap-3 p-5">
              <DotIcon />
              <span className="text-[15px] font-medium text-ink-soft">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

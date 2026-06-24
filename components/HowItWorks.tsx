const steps = [
  {
    title: "Elige tu plan",
    text: "Selecciona el sistema que mejor se ajusta a tu negocio hoy.",
  },
  {
    title: "Paga de forma segura con Stripe",
    text: "El pago se procesa con Stripe. Es rápido y seguro.",
  },
  {
    title: "Recibe el acceso en tu correo",
    text: "El acceso llega automáticamente al correo que usaste al pagar.",
  },
  {
    title: "Copia, pega y empieza",
    text: "Empieza a organizar tus conversaciones y a responder más rápido.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Cuatro pasos simples
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 rounded-xl border border-surface-line bg-surface-soft px-5 py-4 text-center text-sm text-ink-soft">
          El acceso se envía automáticamente al correo usado durante el pago.
        </p>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "¿Recibo algo genérico?",
    a: "No. Preparamos una guía personalizada según las respuestas que nos des después del pago.",
  },
  {
    q: "¿Cuándo recibo mi documento?",
    a: "En máximo 24 horas después de llenar el formulario.",
  },
  {
    q: "¿Cómo me lo envían?",
    a: "Te lo enviaremos al correo que dejes en el formulario. También puedes dejar tu WhatsApp para contacto.",
  },
  {
    q: "¿Funciona para cualquier negocio?",
    a: "Está pensado para negocios pequeños que venden por WhatsApp: belleza, comida, ropa, cursos, servicios, reparaciones, mascotas, fitness y más.",
  },
  {
    q: "¿Es una asesoría?",
    a: "No. Es un documento personalizado listo para usar. No incluye llamada ni consultoría uno a uno.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-surface-soft">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group card overflow-hidden p-0 [&_summary]:list-none"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-semibold text-ink">
                {item.q}
                <svg
                  className="h-5 w-5 flex-none text-ink-muted transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4" />
                </svg>
              </summary>
              <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

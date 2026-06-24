const faqs = [
  {
    q: "¿Es un curso?",
    a: "No. Es un sistema digital listo para usar con respuestas, scripts, hojas de control y guías simples.",
  },
  {
    q: "¿Funciona con WhatsApp normal?",
    a: "Sí, aunque recomendamos usar WhatsApp Business para aprovechar etiquetas, respuestas rápidas y organización.",
  },
  {
    q: "¿Necesito saber Excel?",
    a: "No. El CRM está hecho en Google Sheets y viene listo para copiar y usar.",
  },
  {
    q: "¿Cuándo recibo el acceso?",
    a: "Después del pago, recibirás el acceso automáticamente en el correo que usaste al comprar.",
  },
  {
    q: "¿Sirve para mi tipo de negocio?",
    a: "Está diseñado para negocios pequeños que venden por WhatsApp: belleza, comida, ropa, servicios, cursos, reparaciones, mascotas, fitness y más.",
  },
  {
    q: "¿Incluye atención personalizada?",
    a: "No. Es un producto digital de acceso inmediato. Incluye instrucciones claras para usarlo por tu cuenta.",
  },
  {
    q: "¿Tengo que instalar algo?",
    a: "No. Solo necesitas acceso a WhatsApp, Google Sheets y los documentos incluidos.",
  },
  {
    q: "¿Puedo usarlo desde el celular?",
    a: "Sí. Puedes revisar los mensajes, copiar respuestas y usar el sistema desde celular. Para editar el CRM puede ser más cómodo usar computadora.",
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

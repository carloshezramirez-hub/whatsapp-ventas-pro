/**
 * Mockup de conversación tipo chat. NO usa logos oficiales de WhatsApp/Meta.
 * Es una representación neutra y estilizada de una conversación de negocio.
 */
export default function WhatsAppMockup() {
  return (
    <div className="card overflow-hidden">
      {/* Barra superior del "chat" */}
      <div className="flex items-center gap-3 border-b border-surface-line bg-surface-soft px-5 py-3.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
          TN
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">Tu negocio</p>
          <p className="text-xs text-brand-600">en línea</p>
        </div>
      </div>

      {/* Cuerpo del chat */}
      <div className="space-y-3 bg-white px-4 py-5 sm:px-5">
        {/* Mensaje del cliente */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-surface-soft px-4 py-2.5 text-sm text-ink-soft">
            Hola, ¿me pasas precio?
          </div>
        </div>

        {/* Respuesta con el sistema */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-brand-600 px-4 py-2.5 text-sm text-white shadow-soft">
            Hola 👋 Claro. Tenemos estas opciones: [opción 1], [opción 2] y
            [opción 3]. La más recomendada para ti sería [opción]. ¿Quieres que
            te pase disponibilidad y forma de pago?
          </div>
        </div>
      </div>

      {/* Pie aclaratorio */}
      <div className="border-t border-surface-line bg-surface-soft px-5 py-3">
        <p className="text-xs text-ink-muted">
          También incluye mensajes de seguimiento si el cliente no responde.
        </p>
      </div>
    </div>
  );
}

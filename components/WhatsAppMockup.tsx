/**
 * Mockup de conversación tipo chat. NO usa logos oficiales de WhatsApp/Meta.
 * Muestra un caso práctico de seguimiento: el cliente dudó y el sistema
 * tiene listo el mensaje para recuperarlo.
 */
export default function WhatsAppMockup() {
  return (
    <div className="card overflow-hidden">
      {/* Barra superior del "chat" */}
      <div className="flex items-center justify-between gap-3 border-b border-surface-line bg-surface-soft px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
            TN
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">Tu negocio</p>
            <p className="text-xs text-brand-600">en línea</p>
          </div>
        </div>
        {/* Etiqueta del sistema */}
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
          Seguimiento
        </span>
      </div>

      {/* Cuerpo del chat */}
      <div className="space-y-3 bg-white px-4 py-5 sm:px-5">
        {/* Cliente que dudó */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-surface-soft px-4 py-2.5 text-sm text-ink-soft">
            Me interesa, déjame lo pienso y te aviso 🙌
          </div>
        </div>

        {/* Separador de tiempo */}
        <div className="flex justify-center">
          <span className="rounded-full bg-surface-soft px-3 py-1 text-[11px] font-medium text-ink-muted">
            2 días después
          </span>
        </div>

        {/* Mensaje de seguimiento listo */}
        <div className="flex justify-end">
          <div className="max-w-[88%] rounded-2xl rounded-tr-md bg-brand-600 px-4 py-2.5 text-sm leading-relaxed text-white shadow-soft">
            ¡Hola [nombre]! 😊 ¿Sigues interesada? Todavía tengo lugar para esta
            semana y puedo apartártelo hoy. ¿Te lo confirmo?
          </div>
        </div>
      </div>

      {/* Pie aclaratorio */}
      <div className="border-t border-surface-line bg-surface-soft px-5 py-3">
        <p className="text-xs text-ink-muted">
          Mensajes de seguimiento listos para no perder a quien ya te escribió.
        </p>
      </div>
    </div>
  );
}

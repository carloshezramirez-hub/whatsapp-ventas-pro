import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recibimos tu información",
  robots: { index: false, follow: false },
};

const bullets = [
  "Revisaremos tus respuestas",
  "Adaptaremos los mensajes a tu negocio",
  "Te enviaremos el documento por correo",
  "Si necesitamos algo más, te escribiremos",
];

export default function BriefRecibidoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-soft px-5 py-16">
      <div className="card mx-auto w-full max-w-lg p-8 text-center sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
          </svg>
        </span>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink">
          Recibimos tu información
        </h1>
        <p className="mt-4 text-ink-soft">
          Gracias. Ya tenemos los datos de tu negocio. Prepararemos tu documento
          personalizado y te lo enviaremos en máximo 24 horas al correo que nos
          dejaste.
        </p>

        <ul className="mt-7 space-y-3 text-left">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-[15px] text-ink-soft">
              <svg className="h-5 w-5 flex-none text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        <Link href="/" className="btn-secondary mt-8 w-full">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

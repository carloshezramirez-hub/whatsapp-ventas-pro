import Link from "next/link";
import { supportEmail } from "@/lib/config";

const bullets = [
  "Revisa tu bandeja principal",
  "Revisa spam o promociones",
  "El acceso se envía automáticamente",
];

export default function ThankYou({ planName }: { planName: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-soft px-5 py-16">
      <div className="card mx-auto w-full max-w-lg p-8 text-center sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
          </svg>
        </span>

        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-brand-600">
          Plan {planName}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink">
          Gracias por tu compra
        </h1>
        <p className="mt-4 text-ink-soft">
          Tu pago fue recibido. En unos minutos recibirás el acceso en el correo
          que usaste al pagar.
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
          <li className="flex items-center gap-3 text-[15px] text-ink-soft">
            <svg className="h-5 w-5 flex-none text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
            </svg>
            <span>
              Si tienes problemas, escríbenos a{" "}
              <a href={`mailto:${supportEmail}`} className="font-medium text-brand-700 underline">
                {supportEmail}
              </a>
            </span>
          </li>
        </ul>

        <Link href="/" className="btn-secondary mt-8 w-full">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getPlan, isPlanId } from "@/lib/config";
import { isPaidSession } from "@/lib/stripe";
import BriefForm from "@/components/BriefForm";

export const metadata: Metadata = {
  title: "Personaliza tu guía",
  robots: { index: false, follow: false },
};

// Siempre dinámico: depende del session_id de Stripe.
export const dynamic = "force-dynamic";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-soft">
      <header className="border-b border-surface-line bg-white">
        <div className="container-content flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              W
            </span>
            WhatsApp Ventas Pro
          </Link>
        </div>
      </header>
      <main className="container-content py-12 sm:py-16">{children}</main>
    </div>
  );
}

export default async function BriefPage({
  params,
  searchParams,
}: {
  params: { plan: string };
  searchParams: { session_id?: string };
}) {
  const { plan } = params;
  const plan_ = getPlan(plan);

  // Validación de pago: el paquete debe existir, debe venir session_id
  // y Stripe debe confirmar que la sesión está pagada para ese paquete.
  const sessionId = searchParams.session_id;
  const valid =
    isPlanId(plan) &&
    !!sessionId &&
    (await isPaidSession(sessionId, plan));

  if (!plan_ || !valid) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold text-ink">
            No pudimos verificar tu pago
          </h1>
          <p className="mt-4 text-ink-soft">
            Esta página solo está disponible después de completar la compra. Si
            ya pagaste y ves este mensaje, escríbenos y lo resolvemos.
          </p>
          <Link href="/" className="btn-primary mt-8">
            Volver al inicio
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="eyebrow">Paquete {plan_.name}</span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Cuéntanos de tu negocio
          </h1>
          <p className="mt-4 text-ink-soft">
            Con esta información preparamos tu documento personalizado y te lo
            enviamos en máximo 24 horas.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-surface-line bg-white p-6 shadow-soft sm:p-8">
          <BriefForm plan={plan} />
        </div>
      </div>
    </Shell>
  );
}

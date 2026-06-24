import type { Plan } from "@/lib/config";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-none text-brand-600"
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

export default function PricingCard({ plan }: { plan: Plan }) {
  const isPopular = plan.highlight === "popular";

  return (
    <div
      className={[
        "relative flex flex-col rounded-2xl bg-white p-7 transition-all duration-200",
        isPopular
          ? "border-2 border-brand-500 shadow-card lg:-translate-y-3"
          : "border border-surface-line shadow-soft hover:shadow-card",
      ].join(" ")}
    >
      {plan.badge && (
        <span
          className={[
            "absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-semibold",
            isPopular
              ? "bg-brand-600 text-white"
              : "bg-ink text-white",
          ].join(" ")}
        >
          {plan.badge}
        </span>
      )}

      <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
      <p className="mt-1 text-sm text-ink-muted">{plan.subtitle}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-ink">
          {plan.price}
        </span>
      </div>
      <p className="mt-1 text-xs font-medium text-ink-muted">
        Pago único · Acceso inmediato
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-[15px] text-ink-soft">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/*
        Reemplazar este link cuando tengas tus Stripe Payment Links reales.
        El valor viene de lib/config.ts (variables NEXT_PUBLIC_STRIPE_*).
        Abre en la misma ventana (sin target="_blank"), como se pidió.
      */}
      <a
        href={plan.href}
        className={isPopular ? "btn-primary mt-7 w-full" : "btn-dark mt-7 w-full"}
      >
        {plan.ctaLabel}
      </a>

      <p className="mt-3 text-center text-xs text-ink-muted">
        Pago seguro con Stripe
      </p>
    </div>
  );
}

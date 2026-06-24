"use client";

import { useState } from "react";
import type { PlanId } from "@/lib/config";

export default function BuyButton({
  plan,
  label,
  className = "btn-primary",
}: {
  plan: PlanId;
  label: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function startCheckout() {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      throw new Error();
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className={className}
      >
        {loading ? "Redirigiendo…" : label}
      </button>
      {error && (
        <p className="mt-2 text-center text-xs text-red-600">
          No se pudo iniciar el pago. Intenta de nuevo.
        </p>
      )}
    </>
  );
}

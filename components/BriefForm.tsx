"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
}

const fields: Field[] = [
  { name: "nombre", label: "Nombre completo", required: true },
  { name: "correo", label: "Correo", type: "email", required: true },
  { name: "whatsapp", label: "WhatsApp", required: true },
  { name: "negocio", label: "Nombre del negocio", required: true },
  { name: "ubicacion", label: "País y ciudad", required: true },
  { name: "tipo_negocio", label: "Tipo de negocio", required: true },
  { name: "que_vendes", label: "¿Qué vendes?", type: "textarea", required: true },
  {
    name: "tipo_cliente",
    label: "¿A qué tipo de cliente le vendes?",
    type: "textarea",
    required: true,
  },
  {
    name: "que_mejorar",
    label: "¿Qué quieres mejorar?",
    type: "textarea",
    required: true,
  },
  {
    name: "dudas_frecuentes",
    label: "Dudas frecuentes de tus clientes",
    type: "textarea",
    required: true,
  },
  {
    name: "objeciones",
    label: "Objeciones comunes",
    type: "textarea",
    required: true,
  },
  {
    name: "promociones",
    label: "Promociones o paquetes que quieres vender",
    type: "textarea",
    required: true,
  },
  {
    name: "redes",
    label: "Link de Instagram, Facebook o sitio (opcional)",
    optional: true,
    placeholder: "https://...",
  },
  {
    name: "comentarios",
    label: "Comentarios adicionales (opcional)",
    type: "textarea",
    optional: true,
  },
];

export default function BriefForm({ plan }: { plan: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.paquete = plan;

    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      router.push("/brief-recibido");
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="paquete" value={plan} />

      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={3}
              placeholder={field.placeholder}
              className="w-full rounded-xl border border-surface-line bg-white px-4 py-3 text-[15px] text-ink shadow-soft outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              placeholder={field.placeholder}
              className="w-full rounded-xl border border-surface-line bg-white px-4 py-3 text-[15px] text-ink shadow-soft outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20"
            />
          )}
        </div>
      ))}

      {error && (
        <p className="text-sm text-red-600">
          No pudimos enviar tu información. Revisa tu conexión e intenta de
          nuevo.
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Enviando…" : "Enviar información"}
      </button>
    </form>
  );
}

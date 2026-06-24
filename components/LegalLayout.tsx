import Link from "next/link";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-soft">
      <header className="border-b border-surface-line bg-white">
        <div className="container-content flex h-16 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-ink"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              W
            </span>
            WhatsApp Ventas Pro
          </Link>
        </div>
      </header>

      <main className="container-content py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm font-medium text-brand-700 hover:underline">
            ← Volver al inicio
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <div className="prose-legal mt-8 space-y-6 text-[15px] leading-relaxed text-ink-soft">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

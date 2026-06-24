import Link from "next/link";

const navLinks = [
  { href: "#que-incluye", label: "Qué incluye" },
  { href: "#planes", label: "Planes" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface-line/80 bg-white/80 backdrop-blur-md">
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
            W
          </span>
          <span className="text-[15px] sm:text-base">WhatsApp Ventas Pro</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#planes" className="btn-primary px-4 py-2 text-sm sm:px-5">
          Ver planes
        </a>
      </div>
    </header>
  );
}

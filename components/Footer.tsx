import Link from "next/link";
import { supportEmail, legalDisclaimer } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-surface-line bg-white">
      <div className="container-content py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                W
              </span>
              WhatsApp Ventas Pro
            </div>
            <p className="mt-3 text-sm text-ink-muted">
              Producto digital · Acceso por correo
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Producto</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <a href="#que-incluye" className="hover:text-brand-700">
                  Qué incluye
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-brand-700">
                  Planes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-700">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/terminos" className="hover:text-brand-700">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-brand-700">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Soporte</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <a href={`mailto:${supportEmail}`} className="hover:text-brand-700">
                  {supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-surface-line pt-6">
          <p className="text-xs leading-relaxed text-ink-muted">
            {legalDisclaimer}
          </p>
          <p className="mt-3 text-xs text-ink-muted">
            © {new Date().getFullYear()} WhatsApp Ventas Pro. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

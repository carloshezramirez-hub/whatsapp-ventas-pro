import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { supportEmail, legalDisclaimer } from "@/lib/config";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  robots: { index: true, follow: true },
};

/* Página legal editable. Ajusta el contenido según tu caso y país. */
export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y condiciones">
      <p>
        Al realizar una compra en este sitio aceptas los siguientes términos.
        Te recomendamos leerlos con atención.
      </p>

      <div>
        <h2 className="text-lg font-semibold text-ink">1. Producto digital</h2>
        <p className="mt-2">
          Lo que se ofrece es un producto digital (plantillas, scripts, hojas de
          control y guías). No se trata de un servicio personalizado ni de un
          curso con atención individual.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">2. Pago único</h2>
        <p className="mt-2">
          Cada plan se adquiere mediante un pago único. No hay cargos
          recurrentes ni suscripciones.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">3. Entrega del acceso</h2>
        <p className="mt-2">
          Tras confirmarse el pago, el acceso se envía al correo electrónico
          usado durante la compra en un plazo aproximado de 24 horas. Revisa
          también las carpetas de spam o promociones.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">4. Reembolsos</h2>
        <p className="mt-2">
          Si el sistema no es lo que esperabas, puedes solicitar un reembolso
          dentro de los primeros 7 días posteriores a la compra escribiendo a{" "}
          <a href={`mailto:${supportEmail}`} className="font-medium text-brand-700 underline">
            {supportEmail}
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">5. Uso responsable</h2>
        <p className="mt-2">
          El contenido es para uso personal o de tu negocio. No está permitido
          revender, redistribuir ni compartir el material con terceros sin
          autorización.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">6. Soporte</h2>
        <p className="mt-2">
          Para dudas o problemas con tu compra, escríbenos a{" "}
          <a href={`mailto:${supportEmail}`} className="font-medium text-brand-700 underline">
            {supportEmail}
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">7. No afiliación</h2>
        <p className="mt-2">{legalDisclaimer}</p>
      </div>
    </LegalLayout>
  );
}

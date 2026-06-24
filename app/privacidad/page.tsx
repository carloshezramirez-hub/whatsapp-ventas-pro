import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { supportEmail, legalDisclaimer } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: true, follow: true },
};

/* Página legal editable. Ajusta el contenido según tu caso y país. */
export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad">
      <p>
        Tu privacidad es importante. Aquí explicamos de forma simple cómo se
        maneja tu información al comprar este producto digital.
      </p>

      <div>
        <h2 className="text-lg font-semibold text-ink">1. Datos que recibimos</h2>
        <p className="mt-2">
          Al comprar, el procesador de pagos (Stripe) recopila los datos
          necesarios para la transacción, como tu correo electrónico y la
          información de pago. Este sitio no almacena datos de tarjetas.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">2. Uso de tu correo</h2>
        <p className="mt-2">
          Tu correo se usa para enviarte el acceso al producto y para
          comunicarnos contigo sobre tu compra o soporte.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">3. Pagos con Stripe</h2>
        <p className="mt-2">
          Los pagos se procesan de forma segura a través de Stripe. Te
          recomendamos revisar también la política de privacidad de Stripe.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">4. Herramientas de análisis</h2>
        <p className="mt-2">
          Este sitio puede usar herramientas de análisis y publicidad (por
          ejemplo, métricas de tráfico) para mejorar la experiencia. Puedes
          gestionar las cookies desde la configuración de tu navegador.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">5. Contacto</h2>
        <p className="mt-2">
          Para ejercer tus derechos sobre tus datos o resolver dudas, escríbenos
          a{" "}
          <a href={`mailto:${supportEmail}`} className="font-medium text-brand-700 underline">
            {supportEmail}
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">6. No afiliación</h2>
        <p className="mt-2">{legalDisclaimer}</p>
      </div>
    </LegalLayout>
  );
}

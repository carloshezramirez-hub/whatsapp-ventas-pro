/**
 * Google Apps Script para guardar los formularios post-pago en una Google Sheet.
 *
 * Pasos:
 * 1. Crea una hoja en https://sheets.google.com
 * 2. Menú: Extensiones → Apps Script
 * 3. Pega este código (reemplaza lo que haya) y guarda.
 * 4. Implementar → Nueva implementación → tipo "Aplicación web".
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquiera
 * 5. Copia la URL que termina en /exec.
 * 6. Ponla en .env.local y en Vercel como:  SHEET_WEBHOOK_URL=...
 */

// (Opcional) correo donde quieres el aviso de cada brief nuevo. Deja "" para no enviar.
var NOTIFY_EMAIL = "contact@stoutlab.com";

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Briefs");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Briefs");
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha", "Paquete", "Nombre", "Correo", "WhatsApp", "Negocio",
        "Ubicación", "Tipo de negocio", "Qué vende", "Tipo de cliente",
        "Qué mejorar", "Dudas frecuentes", "Objeciones", "Promociones",
        "Redes", "Comentarios"
      ]);
    }

    var d = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(), d.paquete, d.nombre, d.correo, d.whatsapp, d.negocio,
      d.ubicacion, d.tipo_negocio, d.que_vendes, d.tipo_cliente,
      d.que_mejorar, d.dudas_frecuentes, d.objeciones, d.promociones,
      d.redes, d.comentarios
    ]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        "Nuevo brief — " + (d.negocio || "sin nombre") + " (" + d.paquete + ")",
        "Negocio: " + d.negocio +
        "\nPaquete: " + d.paquete +
        "\nNombre: " + d.nombre +
        "\nCorreo: " + d.correo +
        "\nWhatsApp: " + d.whatsapp +
        "\nUbicación: " + d.ubicacion +
        "\nTipo de negocio: " + d.tipo_negocio +
        "\nQué vende: " + d.que_vendes +
        "\nTipo de cliente: " + d.tipo_cliente +
        "\nQué mejorar: " + d.que_mejorar +
        "\nDudas: " + d.dudas_frecuentes +
        "\nObjeciones: " + d.objeciones +
        "\nPromociones: " + d.promociones +
        "\nRedes: " + d.redes +
        "\nComentarios: " + d.comentarios
      );
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

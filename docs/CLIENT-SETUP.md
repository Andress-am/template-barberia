# Guía de personalización para un cliente nuevo

Todo lo que se edita para adaptar esta plantilla a una barbería específica
vive dentro de dos carpetas. No es necesario tocar nada más.

## 1. src/site/config/

- **business.json** — nombre, ciudad, teléfono, WhatsApp, dirección,
  enlace de Google Maps, horarios y redes sociales.
- **theme.json** — colores de marca y fuentes.
- **seo.json** — título y descripción para buscadores y redes sociales.
- **features.json** — qué secciones se muestran y si la promoción está activa.

## 2. src/site/content/

- **services.json** — lista de servicios (nombre, descripción, duración, precio).
- **barbers.json** — lista de barberos (nombre, especialidad, experiencia, Instagram).
- **gallery.json** — elementos de la galería (categoría y texto alternativo).
- **testimonials.json** — testimonios (nombre, calificación de 1 a 5, comentario).
- **faq.json** — preguntas y respuestas frecuentes.
- **promotion.json** — título, descripción y precio de la promoción activa.

## 3. src/site/images/

Fotografías del cliente: logo, hero, equipo, galería, servicios.

## Reglas importantes

- No es necesario tocar ningún archivo dentro de `src/core/`,
  `src/features/` ni `src/verticals/` para personalizar un cliente.
- Todos los archivos `.json` están validados: si falta un campo o el tipo
  de dato es incorrecto, el sitio muestra un error claro al iniciarlo
  (`npm run dev`), señalando exactamente qué archivo y campo revisar.
- Los precios y datos ficticios (`$XXX`, "Nombre de la Barbería", etc.)
  deben reemplazarse antes de entregar el sitio al cliente.

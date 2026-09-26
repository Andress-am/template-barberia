# Plantilla Premium para Barberías

Plantilla web reutilizable para barberías, construida con Astro. Diseño
premium en negro, blanco y dorado, pensada para personalizarse fácilmente
por cliente sin tocar el código base.

## Cómo personalizar para un cliente nuevo

Toda la guía está en [`docs/CLIENT-SETUP.md`](./docs/CLIENT-SETUP.md).

## Historial de versiones

Ver [`docs/CHANGELOG.md`](./docs/CHANGELOG.md).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321/` en el navegador.

## Arquitectura

- `src/core/` — motor reutilizable (estilos, componentes de UI, layout, configuración)
- `src/features/` — funcionalidades (por ejemplo, el sistema de reservación)
- `src/verticals/barbershop/` — secciones y tarjetas específicas de barberías
- `src/site/` — datos y configuración editables por cliente (lo único que se personaliza)

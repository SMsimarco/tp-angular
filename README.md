Trabajo Práctico Seminario Angular 2026.

## Datos del estudiante
- **Nombre y Apellido:** Simon Guillermo Marconi
- **DNI:** 46344129
- **Email:** ssimonmarconi@gmail.com
- **Sede:** Tandil

## Temática
Tienda de discos de vinilo. Permite ver un catálogo de discos con su stock y precio, elegir cantidad y agregarlos a un carrito de compras.                       El catálogo se obtiene desde una API externa (MockAPI).

## Funcionalidades
- **Ruteo:** dos secciones — `/discos` (catálogo + carrito) y `/about` (info del proyecto).
- **Componentes:** `DiscosList` y `Cart` conviven en la página `ShopDiscs`, comunicados mediante un servicio compartido.
- **Interfaces:** `disc` tipa todos los discos del catálogo y del carrito.
- **Control de flujo:** `*ngFor`/`*ngIf` en la tabla de discos, el carrito y el selector de cantidad.
- **Comunicación entre componentes:** servicio `DiscCart` (estado compartido con `BehaviorSubject`) + `@Input`/`@Output` en el componente `InputNumber`.
- **Carrito con control de stock:** al comprar, se descuenta el stock disponible y no se puede comprar más de lo que hay.

## API externa (MockAPI)
El catálogo de discos se obtiene con una petición **GET** a:
`https://6a5a9908ad8332e75f02993a.mockapi.io/discos`

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

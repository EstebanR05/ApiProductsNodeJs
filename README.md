# ApiProductsNodeJs

API RESTful para la gestión de productos, desarrollada con Node.js, Express y MongoDB.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas de la API](#rutas-de-la-api)
- [Modelo de Datos](#modelo-de-datos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

Este proyecto es una API que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos. Está pensada para ser utilizada como backend de una aplicación de inventario, tienda en línea, o cualquier sistema que requiera gestión de productos.

## Características

- CRUD de productos
- Validación de datos
- Conexión a base de datos MongoDB Atlas
- Estructura modular (controladores, rutas, servicios, esquemas)
- Fácil de extender

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL-de-tu-repositorio>
   ```
2. Entra al directorio del backend:
   ```bash
   cd ApiProductsNodeJs/backend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura las variables de entorno (por ejemplo, la URL de MongoDB está en el código fuente, pero deberías moverla a un archivo `.env` para producción).

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```
2. La API estará disponible en `http://localhost:4000/api/products`.

## Rutas de la API

| Método | Ruta                  | Descripción                |
|--------|-----------------------|---------------------------|
| GET    | /api/products         | Listar todos los productos|
| GET    | /api/products/:id     | Obtener un producto       |
| POST   | /api/products         | Crear un nuevo producto   |
| PUT    | /api/products/:id     | Actualizar un producto    |
| DELETE | /api/products/:id     | Eliminar un producto      |

## Modelo de Datos

El modelo de producto está definido de la siguiente manera:

```js
{
  name: String,         // Nombre del producto (requerido)
  description: String,  // Descripción
  sku: String,          // SKU único (requerido)
  inStock: Boolean,     // ¿En stock? (por defecto: false)
  basePrice: Number,    // Precio base (requerido)
  brand: String,        // Marca (requerido)
  stock: Boolean,       // ¿En stock? (por defecto: false)
  imageUrl: String      // URL de la imagen
}
```

## Estructura del Proyecto

```
backend/
  ├── src/
  │   ├── controller/
  │   ├── routes/
  │   ├── schemas/
  │   └── services/
  ├── package.json
  └── index.ts
```

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request para sugerir mejoras.

## Licencia

Este proyecto está bajo la licencia MIT.

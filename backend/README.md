# 🚀 Backend Project

## 🌟 Introducción

Bienvenido al **Backend Project**. Este backend está desarrollado con **Node.js**, **Express** y **MongoDB**. Aquí encontrarás el código fuente y las instrucciones necesarias para ejecutarlo. 🛠️

---

## 🛠️ Pasos para ejecutar localmente

### 📦 Instalación

Para instalar las dependencias del proyecto, ejecuta:

```sh
npm install
```

### 🚀 Ejecutar el servidor

Para iniciar el servidor backend, usa el siguiente comando:

```sh
npm run dev
```

### 🔍 Requisitos

Asegúrate de tener instalada la versión correcta de Node.js y MongoDB:

- ✅ **Node.js**: 20.x
- ✅ **MongoDB**: Base de datos en la nube (MongoDB Atlas)

Puedes verificar tu versión de Node.js ejecutando:

```sh
node -v
```

---

## 💡 Justificación de elecciones técnicas

Este proyecto utiliza las siguientes tecnologías:

- 🟢 **Express.js**: Framework minimalista para Node.js.
- 🟢 **Mongoose**: ODM para modelar datos en MongoDB.
- 🔄 **CORS**: Middleware para permitir solicitudes desde el frontend.
- 🗄️ **MongoDB Atlas**: Base de datos NoSQL en la nube.

---

## 📂 Descripción de la estructura del proyecto

La estructura del proyecto es la siguiente:

```plaintext
/productsBackend
│-- 📂 build/                  # Código transpilado para producción
│   │-- 🚀 index.js            # Punto de entrada en producción
│-- 📂 request/                # Colecciones de Postman para pruebas
│   │-- 📄 reto_react_mongo.postman_collection.json
│-- 📂 src/                    # Código fuente
│   │-- 📂 controller/         # Controladores de negocio
│   │   │-- 📜 productsController.ts
│   │-- 📂 routes/             # Definición de rutas API
│   │   │-- 🛤️ productsRoute.ts
│   │-- 📂 schemas/            # Definición de modelos de datos
│   │   │-- 📄 productSchema.ts
│   │-- 📂 services/           # Lógica de negocio
│   │   │-- ⚙️ productsService.ts
│   │-- 🚀 index.ts            # Punto de entrada de la aplicación
│-- 🚫 .gitignore              # Archivos a ignorar en Git
│-- 📜 package.json            # Dependencias y scripts
│-- 📜 package-lock.json       # Archivo de bloqueo de dependencias
│-- 📖 README.md               # Documentación del proyecto
│-- ⚙️ tsconfig.json           # Configuración de TypeScript
```
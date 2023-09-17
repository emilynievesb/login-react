# Proyecto de Inicio de Sesión (Login) con React, Vite, Node.js, MongoDB y Yup

Este es un proyecto de inicio de sesión (login) desarrollado con React en el frontend, Node.js en el backend, MongoDB como base de datos y Yup para la validación de objetos de transferencia de datos (DTO).

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/): Se recomienda la versión LTS.
- [MongoDB](https://www.mongodb.com/): Asegúrate de que MongoDB esté instalado y en ejecución.

## Instrucciones de Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona este repositorio en tu máquina local.

2. Abre una terminal en la carpeta raíz del proyecto.

### Iniciar el Backend (Node.js)

1. Navega a la carpeta del backend (desde la carpeta raiz):

```bash
cd src
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

Crea un archivo `.env` en la raíz de la carpeta `src` y configura las variables de entorno necesarias, como la cadena de conexión a MongoDB y cualquier otra configuración específica de tu aplicación. En este ejercicio usaremos

```env
MY_CONFIG={"user":"admin","password":"admin123","database": "login_react"}
MY_SERVER={"hostname":"127.20.30.1", "port":5005}
JWT_PRIVATE_KEY="claves3cret4"
```

4. Inicia el servidor de Node.js:

```bash
npm run dev
```

El servidor debería estar disponible en http://127.20.30.1:5005.

### Iniciar el Frontend (React)

1. Navega a la carpeta del frontend (desde la carpeta raíz), y en una consola distinta ejecuta:

```bash
cd react
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación React:

```bash
npm run dev
```

La aplicación debería estar disponible en http://localhost:5173/

## Uso

- Accede a la aplicación frontend en http://localhost:5173/ para interactuar con el formulario de inicio de sesión.

- Puedes usar el login o el register según lo que necesites.

## Rutas de la API

El backend de este proyecto proporciona varias rutas de API para realizar diversas operaciones relacionadas con la autenticación y la gestión de usuarios.

### Verificar la Existencia de un Usuario

- **Ruta**: `http://127.20.30.1:5005/api/get/getUser`
- **Descripción**: Esta ruta permite verificar la existencia de un usuario en la base de datos y obtener su contraseña registrada para validar los datos de inicio de sesión.
- **Método HTTP**: GET
- **Query**:
  - `username` (cadena): El nombre de usuario que se desea verificar.
- **Respuesta**:
  - Si el usuario existe, la ruta devuelve los detalles del usuario, incluyendo su contraseña registrada.
  - Si el usuario no existe, devuelve un array vacío.

### Verificar la Existencia de un Email

- **Ruta**: `http://127.20.30.1:5005/api/get/getEmail`
- **Descripción**: Esta ruta permite verificar la existencia de un email en la base de datos para realizar validaciones y evitar emails duplicados durante el registro.
- **Método HTTP**: GET
- **Query**:
  - `email` (cadena): El email que se desea verificar.
- **Respuesta**:
  - Si el email ya está registrado, la ruta devuelve un mensaje indicando que el email ya existe.
  - Si el email no existe, devuelve un array vacío.

### Agregar un Nuevo Usuario

- **Ruta**: `http://127.20.30.1:5005/api/post/agregarUsuario`
- **Descripción**: Esta ruta permite agregar un nuevo usuario a la base de datos después de verificar que tanto el nombre de usuario como el email no correspondan a nadie más en la base de datos.
- **Método HTTP**: POST
- **Datos del Cuerpo (Body)**:
  - Un objeto JSON que incluye los datos del nuevo usuario, como `username`, `email`, `password`, etc.
- **Respuesta**:
  - Si se agrega el usuario correctamente, la ruta devuelve una confirmación de registro exitoso o un código de estado adecuado.
  - Si hay algún problema durante el registro, la ruta devuelve un mensaje de error o un código de estado de error.

## Autora

- Emily Nieves

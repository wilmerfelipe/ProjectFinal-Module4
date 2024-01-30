# Tareas del modulo

Para este módulo no se implementaron pruebas, puedes validar el resultado final comparandolo con la aplicación construida en el módulo.

## Tareas

- La tarea para este módulo consiste en construir una aplicación tipo `CRUD` con el modelo de datos explicado a continuación, también debes validar para el registro tanto que el email ya no existe como que el `username` tampoco, por tanto la estructura de los usuarios cambia ahora no siendo solo email y password sino email, password y username. Finalmente, el jwt para la autenticación debe validarse que llegue en el header `x-access-token`.
  - Este CRUD será entonces un backend para la gestión de recetas de los usuarios, estos podrán registrar recetas con la siguiente estructura
  - ```js
    const modelSample: {
        title: "nombre de la receta",
        ingredients: [
            "item 1",
            "item 2"
        ],
        description: "Steps to achieve the recipe"
    ```
  - Modelo Usuario:
  - ```js
    const userSample: {
        email: "test@test.com",
        username: "username1",
        password: "testPassword"
    ```
  - Con estas consideraciones construye una aplicación `CRUD` backend para la manipulación de recetas, siempre teniendo en cuenta que cada usuario solo puede modificar sus items y por tanto debes realizar las validaciones necesarias para no permitir que entre usuarios se modifiquen, es decir, antes de operar sobre una receta debes comparar el identificador del usuario del token con el de la receta.
    - Recordemos el significado de CRUD (create, read, update, delete) es decir, debemos generar un API con cada operación para manipular el modelo de datos de recetas, para crear una receta, modificarla, eliminarla y obtener las recetas de un dado usuario
    - Debes generar un endpoint de registro para que los usuarios puedan registrar nuevas cuentas y un endpoint de login el cual gestione la autenticación y retorne el token para user los demás endpoints, para la persistencia de datos, es decir, para almacenar la información de los usuarios y realizar las validaciones necesarias para el login por ejemplo puedes escribir la data en un fichero como se hace en el ejercicio de clase.

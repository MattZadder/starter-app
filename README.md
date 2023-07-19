# Página web de venta de instrumentos musicales
Este es un proyecto de una página web de venta de instrumentos musicales. El objetivo de este proyecto es desarrollar una aplicación web que sirva y gestione una tienda de música, principalmente la pagina consta de varias pestañas para interés del usuario como la disposición de opciones en el inicio, tales como productos, go, about us y sitio de registro.
En esta página, podrás navegar por diferentes secciones, como la página de inicio, donde encontrarás ofertas destacadas, la sección de productos con una amplia variedad de instrumentos, la página "Acerca de nosotros" para conocer más sobre nuestra empresa y una página de inicio de sesión para acceder a características adicionales.
El proyecto consiste en que la aplicación Windows/Web pueda mostrar al usuario los productos de su interés y luego comprarlos. Para poder realizar esto el proyecto se ha dividido en 3 partes claramente diferenciadas.

1.Diagramas de clases
2.Diagrama de uso
3 Diagrama de arquitectura




## Instalación
1. Clona este repositorio.
2. Abre la carpeta del proyecto en tu entorno de desarrollo.
3. Configura y prepara el entorno del backend.
4. Configura y prepara el entorno del frontend.
5. Ejecuta el proyecto y abre la página web en tu navegador.

   

## Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:
1. Haz un fork de este repositorio.
2. Crea una nueva rama: `git checkout -b nueva-caracteristica`.
3. Realiza los cambios necesarios y haz commit: `git commit -am 'Agrega una nueva característica'`.
4. Envía los cambios a la rama remota: `git push origin nueva-caracteristica`.
5. Envía una solicitud de extracción en GitHub.



## Diagrama de Clases

 ![Diagrama de Clases](ruta/al/diagrama_de_clases.png)
 
Clase "Usuario":
Descripción: Esta clase representa a un usuario del sistema, ya sea un usuario estándar o un administrador. Tiene atributos como su identificador, nombre, correo y contraseña. Los métodos iniciarSesion() y cerrarSesion() se utilizan para realizar la autenticación del usuario.
Clase "Instrumento":
Descripción: Esta clase representa un instrumento musical disponible para la venta. Tiene atributos como su identificador, nombre, precio, descripción, categoría y marca. El método obtenerInformación() devuelve una cadena de texto con información detallada sobre el instrumento.
Clase "Carrito":
Descripción: Esta clase representa el carrito de compras de un usuario estándar. Tiene atributos como su identificador, el identificador del usuario al que pertenece y la fecha en que se creó. Los métodos agregarProducto() y eliminarProducto() se utilizan para agregar y eliminar productos del carrito.
Clase "Página de Inicio":
Descripción: Esta clase representa la página de inicio de la aplicación. Tiene un atributo "contenido" que almacena el contenido de la página. El método mostrarContenido() se utiliza para mostrar el contenido de la página de inicio.
Clase "Sección About Us":
Descripción: Esta clase representa la sección "Acerca de nosotros" de la aplicación. Tiene un atributo "contenido" que almacena el contenido de esta sección. El método mostrarContenido() se utiliza para mostrar el contenido de la sección "Acerca de nosotros".






## Caso de Uso
El diagrama de caso de uso muestra las interacciones entre los actores (usuarios) y el sistema, representando los diferentes casos de uso o funcionalidades del sistema.
•	Actores: Usuario Estándar, Administrador.
•	Descripción: Este caso de uso describe el proceso de un usuario estándar para realizar un pedido de un instrumento musical en la página web. También se menciona la posibilidad de que el administrador agregue un nuevo instrumento.
Flujo Principal:
1.	El usuario estándar busca un instrumento en la página web.
2.	El sistema muestra los resultados de la búsqueda.
3.	El usuario estándar selecciona un instrumento y lo agrega al carrito de compras.
4.	El sistema muestra el carrito de compras actualizado.
5.	El usuario estándar completa los detalles del pedido, como la dirección de envío y los datos de facturación.
6.	El sistema registra el pedido y genera una confirmación.
7.	El usuario estándar realiza el pago a través de los métodos de pago disponibles.
8.	El sistema procesa el pago y actualiza el estado del pedido.
9.	El usuario estándar recibe la confirmación de compra y los detalles de envío.
Flujo Alternativo 1: Cancelar Pedido por Usuario Estándar:
1.	El usuario estándar decide cancelar el pedido en cualquier etapa del flujo principal.
2.	El sistema cancela el pedido y muestra un mensaje de confirmación al usuario.
Flujo Alternativo 2: Agregar Nuevo Instrumento por Administrador:
1.	El administrador accede a la funcionalidad de administración.
2.	El sistema muestra la opción de agregar un nuevo instrumento.
3.	El administrador completa los detalles del nuevo instrumento.
4.	El sistema registra el nuevo instrumento en la base de datos.


![Caso de Uso](ruta/al/caso_de_uso.png)



## Arquitectura de Capas en el Proyecto de Página Web de Instrumentos Musicales

A continuación se muestra la presentación sobre la arquitectura de capas utilizada en nuestro proyecto de página web de instrumentos musicales.
Antes de entrar en detalles sobre la arquitectura de capas, es importante comprender los desafíos que enfrentamos en el proyecto.
Necesitamos manejar la complejidad de la aplicación, mantener un código limpio y modular, facilitar las pruebas y permitir futuras mejoras y escalabilidad.

La arquitectura de capas nos brinda varios beneficios significativos:
•	Separación de Responsabilidades: Nos permite separar claramente las responsabilidades y el flujo de trabajo de diferentes componentes.
•	Modularidad: Cada capa tiene una función específica, lo que facilita la adición, modificación o reemplazo de componentes sin afectar a otras partes del sistema.
•	Reutilización de Componentes: Al tener una separación clara de capas, podemos reutilizar componentes en diferentes partes de la aplicación.
•	Mantenibilidad: La estructura en capas facilita la identificación y solución de problemas, lo que agiliza el mantenimiento y la corrección de errores.
Nuestra arquitectura de capas consta de las siguientes capas:

1.	Capa de Presentación (UI): Se encarga de la interfaz de usuario y la interacción con los usuarios finales.
2.	Capa de Aplicación (Frontend): Gestiona la lógica de la aplicación y las interacciones con la interfaz de usuario.
3.	Capa de Datos (Backend): Maneja la persistencia de datos y las operaciones relacionadas con la base de datos.
4.	Capa de Infraestructura: Proporciona los componentes y servicios de bajo nivel necesarios para el funcionamiento del sistema.



Detalles de cada Capa

![Diagrama de Arquitectura](ruta/al/diagrama_de_arquitectura.png)

•	En cada capa, tenemos componentes y servicios específicos que desempeñan un papel crucial en el funcionamiento del sistema.
•	En la Capa de Presentación, utilizamos componentes de React con TypeScript para construir la interfaz de usuario y la lógica relacionada con la interfaz.
•	En la Capa de Aplicación (Frontend), gestionamos la lógica principal de la aplicación, como la autenticación, el carrito de compras y la gestión de pedidos.
•	En la Capa de Datos (Backend), manejamos la interacción con la base de datos, incluida la gestión de usuarios, productos y operaciones de carrito de compras.
•	En la Capa de Infraestructura, proporcionamos los componentes y servicios de bajo nivel necesarios para el funcionamiento del sistema.

Conclusiones
En resumen, la arquitectura de capas es una elección sólida para nuestro proyecto de página web de instrumentos musicales debido a sus beneficios clave.
Nos permite tener una aplicación modular, fácil de mantener y escalar, con una separación clara de responsabilidades.
La arquitectura de capas nos brinda flexibilidad y nos permite adaptarnos a futuros cambios y mejoras en el proyecto.




## Tecnologías Utilizadas
Frontend:
•	React: Un popular framework de JavaScript para construir interfaces de usuario interactivas y reutilizables. React permite crear componentes de interfaz de usuario reactivos y mantener un estado eficiente en la aplicación.
•	TypeScript: Un lenguaje de programación que amplía JavaScript al agregar tipado estático opcional. TypeScript proporciona ventajas como la detección temprana de errores, autocompletado mejorado y una mejor documentación del código.
•	HTML y CSS: Lenguajes fundamentales para estructurar y dar estilo a las páginas web. HTML se utiliza para definir la estructura del contenido, mientras que CSS se utiliza para aplicar estilos y diseños a las páginas.
•	React Router: Una librería de enrutamiento para React que permite gestionar la navegación entre diferentes vistas y componentes dentro de la aplicación.
Backend:
•	Node.js: Un entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome. Node.js permite ejecutar código JavaScript en el lado del servidor y construir aplicaciones web escalables y de alto rendimiento.
•	Express.js: Un framework web para Node.js que simplifica el desarrollo de aplicaciones web y proporciona una abstracción sobre las funcionalidades básicas de HTTP.
•	MongoDB: Una base de datos NoSQL orientada a documentos que ofrece flexibilidad en el almacenamiento y recuperación de datos. MongoDB es muy utilizado en aplicaciones web y proporciona una forma sencilla de almacenar y consultar datos JSON.
•	Mongoose: Una librería de modelado de objetos para Node.js que proporciona una interfaz de alto nivel para interactuar con la base de datos MongoDB. Mongoose simplifica la definición de modelos y la validación de datos en la aplicación.
Otras tecnologías:
•	Git: Un sistema de control de versiones distribuido que permite el seguimiento de cambios en el código fuente. Git facilita la colaboración en equipo y el mantenimiento de versiones del proyecto.
•	GitHub: Una plataforma de alojamiento y colaboración basada en Git. GitHub ofrece funcionalidades para alojar repositorios de código, gestionar problemas y solicitudes de cambios, y facilitar la colaboración entre desarrolladores.














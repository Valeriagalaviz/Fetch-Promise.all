# Tipos de obtencón de datos en React

-**Obtención de datos iniciales**: Datos que se cargan al abrir una página y que son necesarios para mostrar una experiencia significativa de inmediato. Usualmente se realiza en `useEffect` o `componentDidMount`.
* **Obtención de datos bajo demanda**: Datos que se cargan después de la interacción del usuario para actualizar su experiencia, como autocompletados y formularios dinámicos. Se activa generalmente en callbacks.
 
## ¿Es necesaria una biblioteca externa para la obtención de datos?

-**Respuesta corta**: Depende del caso de uso.
***Para casos simples**: Un fetch en useEffect es suficiente.
+**Para casos complejos**: Se deben considerar aspectos como el manejo de errores, caché, condiciones de carrera, cancelación de solicitudes y fugas de memoria.

##Elección de bibliotecas:

-Axios: Abstrae algunas preocupaciones como la cancelación de solicitudes, pero no tiene una API específica de React.
*SWR: Maneja casi todo, incluyendo la caché.
+Importante: Ninguna biblioteca o Suspense mejorará el rendimiento por sí sola. Es crucial entender los fundamentos de la obtención y orquestación de datos.

##¿Qué es una aplicación React “eficiente”?
-Rendimiento: No solo se mide por el tiempo de renderizado, sino también por la experiencia del usuario y cómo se carga y muestra el contenido.

# Tipos de obtención de datos en React

## Obtención de datos iniciales
Datos que se cargan al abrir una página y que son necesarios para mostrar una experiencia significativa de inmediato. Usualmente se realiza en `useEffect` o `componentDidMount`.

## Obtención de datos bajo demanda
Datos que se cargan después de la interacción del usuario para actualizar su experiencia, como autocompletados y formularios dinámicos. Se activa generalmente en callbacks.

## ¿Es necesaria una biblioteca externa para la obtención de datos?
**Respuesta corta**: Depende del caso de uso.
- **Para casos simples**: Un `fetch` en `useEffect` es suficiente.
- **Para casos complejos**: Se deben considerar aspectos como el manejo de errores, caché, condiciones de carrera, cancelación de solicitudes y fugas de memoria.

## Elección de bibliotecas
- **Axios**: Abstrae algunas preocupaciones como la cancelación de solicitudes, pero no tiene una API específica de React.
- **SWR**: Maneja casi todo, incluyendo la caché.
- **Importante**: Ninguna biblioteca o Suspense mejorará el rendimiento por sí sola. Es crucial entender los fundamentos de la obtención y orquestación de datos.

## ¿Qué es una aplicación React “eficiente”?
El rendimiento no solo se mide por el tiempo de renderizado, sino también por la experiencia del usuario y cómo se carga y muestra el contenido.

## Técnicas para controlar las tres etapas de la obtención de datos
- **Promise.all**: Utiliza `Promise.all` para realizar múltiples solicitudes de obtención de datos en paralelo, lo que puede reducir significativamente el tiempo total de espera.
- **Ciclo de vida de React y obtención de datos**: Entiende cuándo se activan los diferentes métodos del ciclo de vida de React y cómo afectan a la obtención de datos. Por ejemplo, `useEffect` no se activará hasta que el componente se haya montado y esté en el árbol de renderizado.
- **Limitaciones del navegador**: Ten en cuenta que los navegadores tienen un límite en la cantidad de solicitudes que pueden manejar en paralelo a un mismo host. Para HTTP1, Chrome permite solo 6 solicitudes en paralelo.

## Cómo resolver la cascada de solicitudes
- **Evitar las cascadas**: Asegúrate de que las solicitudes de datos no se bloqueen entre sí. En lugar de esperar a que una solicitud termine antes de iniciar la siguiente, intenta disparar todas las solicitudes necesarias al mismo tiempo.
- **Optimización del rendimiento**: Considera la posibilidad de cargar datos críticos primero y luego los menos críticos, para mejorar la percepción del rendimiento por parte del usuario.

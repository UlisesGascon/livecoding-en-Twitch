# :clapper: Livecoding en Twitch!

![logo de Twitch](images/twitch_header.png)

## Emisiones pasadas

### Issue 1: Survapp, sobrevive al fin del mundo con Node.js
![imagen promocional](images/portada_issue1.jpeg)

**Detalles**
- Expectativas: Versión extendida y en detalle de mi taller "Desarrolla tu Survival Alert con Node.js" del T3chfest de este año. Y además estreno canal!
- Tipo: Walkthrough y Live Coding  
- Nivel: Medio-Avanzado de JavaScript/Nodejs
- Temas: Firebase, Ajax, Eventos, Manipulación del DOM
- Duración: 02:23:10

**Contenido**
- Repasaremos las bases de javaScript y además revisaremos todos los PRs de MovieFire (App de Homenaje)
- Modularización en Nodejs
- Trabajando con Node y NVM para las versiones
- Tabajando con fuentes abiertas de datos
- Vorpal para hacer un CLI
- GOT para hacer llamadas HTTP
- Puppetter como scraper

**Más información**
- [:book: Hilo resumen del capitulo en Twitter](https://twitter.com/kom_256/status/1107205230691794944)
- [:school_satchel:Repo de trabajo](https://github.com/Fictizia/taller-survapp-t3chfest-2019)
- [:tv: Ver en Youtube](https://www.youtube.com/watch?v=vKcCV5_9rKQ)

### Issue 2: Desarrollando una app desde cero con Firebase
![imagen promocional](images/portada_issue2.jpeg)

**Detalles**
- Tipo: #LiveCoding del bueno!.
- Expectativas: Desarrollaremos una Aplicación web que nos permite guardar nuestras películas favoritas en Firebase.
- Nivel: Medio-Básico de JavaScript
- Temas: Firebase, Ajax, Eventos, Manipulación del DOM
- Duración: 03:22:51

**Contenido**
- Github (Gestión de issues, PRs y demás...)
- GitFlow (Mecánicas de trabajo en ramas)
- Firebase Realtime Database
- Eventos (Click, teclado)
- Ajax (Peticiones Get)
- Brutalismo en CSS (Crudeza visual, etiqueta marquee, etc...)

**Más Información**
- [:book: Hilo resumen del capitulo en Twitter](https://twitter.com/kom_256/status/1109726834227376128)
- [:school_satchel: Repo de trabajo](https://github.com/estreamercoders/Homenaje-a-movieFire)
- [:tv: Ver en Youtube](https://www.youtube.com/watch?v=A7FfQvh7IUc)

### Issue 3: Desarrollando una app desde cero con Firebase
![imagen promocional](images/portada_issue3.jpeg)

**Detalles**
- Tipo: Walkthrough y Live Coding
- Expectativas: Repasaremos las bases de javaScript y además revisaremos todos los PRs de MovieFire (App de Homenaje)
- Nivel: Medio-Básico de JavaScript
- Temas: Firebase, Ajax, Eventos, Manipulación del DOM
- Duración: 03:19:26

**Contenido**
- [JavaScript, ¡Inspírate!](https://leanpub.com/javascript-inspirate)
- Tipos de datos en JavaScript
- Validaciones de datos
- Trabajo con cadenas, numeros y boleanos
- Trabajo con Punteros (deep copy vs shadow copy)
- Estrcuturas condicionales (`if`, `else`, `else if`, operador ternario)
- `==` vs. `===`
- Programación funcional con Arrays (`reduce`, `sort`, `map`)
- Trazas de ES6 (arrow functions)
- Filtrado de arrays y arrays de objetos
- Manpulación del DOM (inserciones dinamicas de datos filtrados)
- Usando promesas para gestionar AJAX
- Usando `Promise.all` para hacer +30 llamadas Ajax en paralelo
- Buenas practicas

**Más Información**
- [:book: Hilo resumen del capitulo en Twitter](https://twitter.com/kom_256/status/1112623559539638273)
- [:school_satchel: Repo de trabajo](apuntes/issue3)
- [:tv: Ver en Youtube](https://www.youtube.com/watch?v=p59kAq_TB7w)


### Issue 4: Historía de la asincronía en JavaScript y child processes con Nodejs y Firebase
![imagen promocional](images/portada_issue4.jpeg)

**Detalles**
- Tipo: Live Coding
- Expectativas: Repasaremos las bases de la asincronía en javaScript y probaremos el concepto "Realtime" de Firebase creando un script con Nodejs para monitorizar nuestro servidor en tiempo real usando la librería del Core de Nodejs Child Process. Además lanzaremos la primera release de MovieFire (App de Homenaje)
- Nivel: Medio-Avanzado de JavaScript/Nodejs
- Temas: Firebase, Promesas, Callbacks, Programación orientada a Eventos, Child processes, Nodejs Core...
- Duración: 02:57:08

**Contenido**
- Un Maravilloso mundo sin asincronía
- Callbacks con timers
- Ajax con XMLHttpRequest (XHR) y callbacks
- Patrón: `error-first callback style` de Nodejs
- Promesa `then`, `catch`, `finally`
- `Promise.resolve`, `Promise.reject`
- `Promise.race`, `Promise.all` con `fetch`
- `Async/Await` junto a `try/catch/finally`
- Callbacks y promesas en la misma función
- `util.promisify` en Nodejs
- `EventEmitter` con el clásico `PingPong Game`

**Más Información**
- [:book: Hilo resumen del capitulo en Twitter](https://twitter.com/kom_256/status/1115137372184875008)
- [:school_satchel: Repo de trabajo para asincronía](apuntes/issue4)
- [:tv: Ver en Youtube](https://youtu.be/DjTuztU2G1U)



### Issue 5: Child processes con Nodejs y Firebase
![imagen promocional](images/portada_issue5.jpeg)

**Detalles**
- Tipo: Live Coding
- Expectativas: Probaremos el concepto "Realtime" de Firebase creando un script con Nodejs para monitorizar nuestro servidor en tiempo real usando la librería del Core de Nodejs Child Process.
- Nivel: Avanzado de JavaScript/Nodejs
- Temas: Firebase, Promesas, Callbacks, Programación orientada a Eventos, Child processes, Nodejs Core...
- Duración: 03:22:58


**Contenido**
- Explicar el proyecto. [Doc | Tutorial Raspberry Pi - Graficar la temperatura de la CPU con Node.js y Highcharts](https://geekytheory.com/tutorial-raspberry-pi-graficar-la-temperatura-de-la-cpu-con-node-js-y-highcharts)
- Forkear [el repo](https://github.com/GeekyTheory/) en [estreamercoders](https://github.com/estreamercoders)
- Renombre del proyecto a `Firebase-system-monitor`
- Habilitar los issues
- Preparar el entorno en Local o en C9.io
- Creación de la rama `development`
- Entender la librería [Child Process](https://nodejs.org/api/child_process.html)
- Entender [socket.io](https://github.com/socketio/chat-example.git)
- Analizar rápidamente el código y las dependencias
- Ley del boy Scout: ¿Podemos refactorizar?
    - Creación de la rama `refactor`
    - Añadir un fichero de configuración
    - Errores en general y tabulaciones
    - Promesas y otras opciones
    - PR con los cambios
- Trabajando desde la rama `development`
- Incluir Firebase
- Preparar un fichero de configuración

**Más Información**
- [:book: Hilo resumen del capitulo en Twitter](https://twitter.com/kom_256/status/1117677857877233664)
- [:school_satchel: Repo de trabajo para entender conceptos](apuntes/issue5)
- [:school_satchel: Repo principal estreamercoders/Firebase-system-monitor](https://github.com/estreamercoders/Firebase-system-monitor)
- [:tv: Ver en Youtube](https://youtu.be/2n5_zYdVypc)



### Issue 6: ¡Yeoman es mucha magia! (parte 1/2)
![imagen promocional](images/portada_issue6.jpeg)

**Detalles**
- Tipo: Live Coding
- Expectativas: Aprenderemos a utilizar Yeoman para consumir generadores de proyectos e incluso generaremos nuestro propio generador de proyectos para ayudarnos el resto de la temporada.
- Nivel: Medio/Básico de JavaScript/Nodejs
- Temas: Yeoman, Node, Automatización
- Duración: 02:07:20


**Contenido**
- Entender Yeoman
- Usar un generador (generator-webapp)
- Destripar un generador (generator-webapp)
- Entender el proceso de creación de generadores
- Usar el generador de generadores (generator-generator)
- Construir nuestro primer geenrador de proyectos

**Más Información**
- [:book: Hilo resumen del capitulo en Twitter](https://twitter.com/kom_256/status/1122794122610393088)
- [:school_satchel: Repo de trabajo para entender conceptos](apuntes/issue6)
- [:tv: Ver en Youtube](https://youtu.be/ZGZ0FSEPKQc)


### Issue 7: ¡Yeoman es mucha magia! (parte 2/2)
![imagen promocional](images/portada_issue7.jpeg)

**Detalles**
- Tipo: Live Coding
- Expectativas: Aprenderemos a utilizar Yeoman para consumir generadores de proyectos e incluso generaremos nuestro propio generador de proyectos para ayudarnos el resto de la temporada.
- Nivel: Medio/Básico de JavaScript/Nodejs
- Temas: Yeoman, Node, Automatización
- Duración: 02:46:02


**Contenido**
- Funcionamiento interno de Yeoman
- Usar el mítico [generator-generator](https://www.npmjs.com/package/generator-generator)
- Crear un generador desde cero para nuestros
- Utilizar la librería [inquirer](https://www.npmjs.com/package/inquirer) para hacer preguntas por terminal con sentido
- Utilizar [composability](https://yeoman.io/authoring/composability.html) para extender generadores existentes
- Crear un generador para hacer proyectos CLI con [Vorpal](https://www.npmjs.com/package/vorpal)
- Crear un generador para hacer proyectos de scraping con [Puppeteer](https://www.npmjs.com/package/puppeteer)

**Más Información**
- [:book: Hilo resumen del capitulo en Twitter](https://twitter.com/kom_256/status/1127886660212076544)
- [:school_satchel: Repo de trabajo para entender conceptos](apuntes/issue7)
- [:tv: Ver en Youtube](https://youtu.be/6e2M96TTsk4)




## :coffee: Apoyame!
**🍻 Si te gusta lo que hago y quieres apoyarme siempre puedes invitarme a un Café virtual ☕️ para reponer cafeína 😋**

[![imagen que dice "Support me on Buy me a coffee"](images/coffee_support.jpg)](https://www.buymeacoffee.com/ulisesGascon)

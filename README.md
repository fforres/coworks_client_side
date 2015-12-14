Coworks.cl
=======================
(Based on the cool framework [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) by [@davezuko](https://github.com/davezuko))

[![dependencies](https://david-dm.org/fforres/coworks_client_side.svg)](https://david-dm.org/fforres/coworks_client_side)
[![devDependency Status](https://david-dm.org/fforres/coworks_client_side/dev-status.svg)](https://david-dm.org/fforres/coworks_client_side#info=devDependencies)


> ## Coworks.cl :) !
> Porque tenemos la necesidad de información sobre los distintos coworks disponibles para trabajar.

> Si tienes alguna sugerencia, comentario, felicitaciones o reclamos, acá una pequeña lista de...

Como ayudar
----------------
1. [Quiero ayudar!](#) - (Quieres ayudar con el desarrollo?)
  - [Con Contenido](#aportar-con-contenido) - (Siempre necesitamos información actualizada!)
  - [Con Desarrollo](#aportar-con-desarrollo) - (Porque somos geeks :-))
    - [Requerimientos](#requerimientos) - (Que necesitas para ayudar)
    - [Tecnologías](#tecnologias) - (Con que tecnologías trabajamos)
1. [Como usar el proyecto](#como-usar)
  - [Estuctura](#estructura)
  - [Server](#server)
  - [Estilos](#estilos)
  - [Testing](#testing)
  - [Utilities](#utilities)
  - [Troubleshooting](#troubleshooting)





Aportar Con Contenido
---------------
¿Tienes algun comentario sobre como hacer hacer este proyecto *mucho más mejor*?
Puedes:
-[Enviarnos una sugerencia](https://github.com/fforres/coworks_client_side/issues/new)
-[Reportar un Bug](https://github.com/fforres/coworks_client_side/issues/new)
O en su defecto
-[Hablar en Twitter](https://www.twitter.com/fforres)
-[Si quieres donarnos algo para mantener vivo el proyecto o los servidores](https://flattr.com/profile/fforres)


##### TODO  (Queda por realizar)
- **Sidebar**
  - [ ] Agregar boton de cerrado
  - [ ] Mejorar estilo (Pretify)
  - [ ] Agregar scrolling vertical
  - [ ] Agregar Búsqueda/Filtrado
  - [ ] Agregar barra de búsqueda
  - [ ] Agregar información por coworks (Quizá un area desplegable?)
- **MAPA**
  - [ ] Centrado del mapa al clickear un pin
  - [ ] Cambiar estilo de los PINS.
  - [ ] Agregar desplegable con información de cowork seleccionado
  - [ ] Agregar información on hover.
  - [ ] Cambiar números por Nombre.
- **API**
  - [ ] Migrar a Server API (Firebase? RethinkDB?)
- **GLOBAL**
  - [ ] Agregar TopBar(?)
  - [ ] Make Responsive


##### Ya hecho (Aunque se puede mejorar)

- [x] ~~Agregar mapa~~
- [x] ~~Agregar sidebar~~
- [x] ~~Agregar listado al sidebar~~
- [x] ~~Agregar API local (.JSON files)~~
- [x] ~~Agregar store al sidebar~~
- [x] ~~Agregar store a los coworks~~
- [x] ~~Fixear estilos del mapa y sidebar (No overlapping)~~
- [x] ~~Agregar Readme~~

###### also:
- [x] ~~Recargar Condensadores de flujo~~
- [x] ~~Rearticular Destornilladores Sónicos~~
- [x] ~~Descombobular Apertura de Holocrones~~
- [x] ~~Beber café~~


Aportar Con Desarrollo
---------------
> ([Aquí](https://guides.github.com/activities/contributing-to-open-source/) una pequeña guía sobre como contribuir a un proyecto open-source)

1. Forkea el repo:
2. Clona tu repo:

  ```shell
  $ git clone {la direccion de tu repo, en mi caso es: https://github.com/fforres/coworks_client_side.git}
  $ cd {nombre del repo}
  $ npm install          # Instala los modulos necesarios, listados en /package.json (Son varios, así que puede ser lento)
  $ npm start            # Iniciar el proyecto (AKA: Le t the magic happen :) )
  ```
3. (Momento de decidir)
  * Desarrollando? Usa `npm start` para inciar un server de desarrollo y entra a `http://localhost:3000`.
  * Compilando al disco? Usa `npm run compile`.  
4. Realiza tus cambios, y envía un pull request! :)

Requerimientos
------------

  Node `^5.0.0` [Descárgalo acá](https://nodejs.org/en/download/)

Tecnologías
--------

* [React](https://github.com/facebook/react) (`^0.14.0`)
  * Includes react-addons-test-utils (`^0.14.0`)
* [Redux](https://github.com/gaearon/redux) (`^3.0.0`)
  * [react-redux](https://github.com/rackt/react-redux) (`^4.0.0`)
  * [redux-devtools](https://github.com/gaearon/redux-devtools) (`npm run dev:nw` para correrlo en otra ventana)
  * [redux-thunk middleware](https://github.com/gaearon/redux-thunk)
* [react-router](https://github.com/rackt/react-router) (`^1.0.0`)
* [redux-simple-router](https://github.com/jlongster/redux-simple-router) (`^0.0.10`)
* [Webpack](https://github.com/webpack/webpack)
  * [CSS modules!](https://github.com/css-modules/css-modules) <3
  * [sass-loader](https://github.com/jtangelder/sass-loader)
  * [postcss-loader](https://github.com/postcss/postcss-loader) con cssnano para prefix de estilos y minificación
  * Loaders para fonts e imagenes
* [Express](https://github.com/strongloop/express) (Solo para el desarrollo, el entorno de producción es full client-side)
  * [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
  * [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Karma](https://github.com/karma-runner/karma) (Tests!)
  * [Mocha](https://mochajs.org/) w/ [Chai](http://chaijs.com/guide/installation/), [Sinon-Chai](http://chaijs.com/plugins/sinon-chai), and [Chai-as-Promised](https://github.com/domenic/chai-as-promised/)
  * [PhantomJS](http://phantomjs.org/)
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [`react-transform-hmr`](https://github.com/gaearon/react-transform-hmr) para el hot-reloading
  * [`react-transform-catch-errors`](https://github.com/gaearon/react-transform-catch-errors) con [`redbox-react`](https://github.com/KeywordBrain/redbox-react) para sentirse mal con el rojo de los errores :)
* [ESLint](http://eslint.org)
  * Con [eslint-config-defaults](https://github.com/walmartlabs/eslint-config-defaults) (airbnb linter :))
  * Un `.eslintrc` espcecífico para trabajar con Mocha and Chai.


Como Usar
-----
**NOTA:** Este proyecto usa [debug](https://github.com/visionmedia/debug) para mejorar la  experiencia de debugging. Para ver todos los mensajes que pueda enviar el proeycto, setea la variable  `DEBUG` a `kit:*` (p.e. `DEBUG=kit:* npm start`)

**Detalles de los comandos de NPM**

* `npm start` - Inicia el server de desarrollo en `localhost:3000`. HMR activado para eld esarrollo
* `npm run compile` - Compila la app al disco (por defecto en `~/dist` ).
* `npm run dev:nw` - Igual que `npm start`, pero abre `redux devtools` en una nueva ventana.
* `npm run dev:no-debug` - Igual que `npm start`, pero sin `redux devtools`.
* `npm run test` - Corre los test unitarios.
* `npm run test:dev` - Corre Karma, y se queda obserando para re-lanzar los tests cuando existan cambios en el proyecto (No genera reportes) .
* `npm run lint` - Corre ESLint contra el proyecto.
* `npm run lint:tests` - * `npm run lint` - Corre ESLint contra los test.
* `npm run deploy`- Corre Linter, Tests, y luego, si no falla, compila la aplicación al disco.

**NOTE:** Deployando a un entorno concreto? Recuerda especificaro `NODE_ENV` para que webpack use la configuracion correcta.
Por ejemplo: `NODE_ENV=production npm run compile` compilará tu aplicación con `~/build/webpack/production.js`.

### Configuration

Una configuracion basica del proyecto se puede encontrar en `~/config/index.js`. Ahí se puede setear los directorios `src` y `dist`, agregar y remover aliases, ajustar la preferencias de vendor, y ETC.
(Si necesitas overrides específicos para un `NODE_ENV`, crea un archivo de nombre `NODE_ENV` con un prefijo  `_` en `~/config` (Por ejemplo, para un entorno `PREPROD`, el archivo se llamaría `~/config/_preprod.js`).

Configuraciones:

* `dir_src` - El source code de la aplicación
* `dir_dist` - Path a la aplicación compilada
* `server_host` - Host para el server de express
* `server_port` - Puerto para el server de express
* `compiler_css_modules` - Si se usarán CSS modules
* `compiler_source_maps` - Si se generarán source maps
* `compiler_vendor` - Packages que separaremos en un "Vendor" bundle

Estructura
---------

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. It is something that has worked very well for me and my team, but use only what makes sense to you.

```
.
├── bin                      # Scripts de Compilacion/Construcción/Desarrollo
├── build                    # Configuraciones de Build
│   └── webpack              # Archivos específicos de  configuración para webpack
├── config                   # Configuraciones del proyecto
├── server                   # Aplicación de express (con webpack middleware)
│   └── app.js               # Archivo de inicio del server de express
├── src                      # Source code de la aplicación
│   ├── components           # Componentes genéricos de React (Dumb components)
│   ├── data                 # Archivos que emulan apis (DataSource)
│   ├── containers           # Componentes que entregan Contexto (e.g. Redux Provider)
│   ├── layouts              # Componentes que dictar la estructura de una página
│   ├── redux                # Todo-lo-relacionado-con-redux
│   │   └── modules          # Reducers/Constantes/Acciones
│   ├── routes               # Rutas de la aplicación
│   ├── styles               # Estilos globales de la app
│   ├── utils                # Utilidades genéricas
│   ├── views                # Componentes que viven en una ruta
│   └── app.js               # Bootstraping y rendering de la aplicación
└── tests                    # Tests
```

### Components vs. Views vs. Layouts

**TL;DR:** Todos son componentes.
**Layout** Un componente que define la estructura de una página, cosas como: Barra de navegación, viewport, barra lateral, footer, espacio/contenedor del contenido. La mayoría de las aplicaciones suelen tener solo un layout, pero sin problemas pueden ser más y por eso es que existe la separación de estos.
**Views** Componeentes que viven en las rutas, generalmente renderizados dentro de un **Layout**. Esto termina implicando que con esta estructura, cualquier cosa dentro de **Components** termina siendo un Dumb Component


### Webpack Root Resolve
Webpack está configurado para usar:  [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), que te deja importar packages locales como si estuvieras en la raiz de tu directorio  `~/src` Por ejemplo:

```js
// Si estamo por ejemplo en: ~/src/views/some/nested/View.js

// lo que era:
import SomeComponent from '../../../components/SomeComponent';

// ahora es:
import SomeComponent from 'components/SomeComponent'; // YEIII :D!
```

### Globals

Existen algunas varibales globales en este proyecto, las que pueden ser encontradas dentro de `globals` en `~/config/index.js`.

* `process.env.NODE_ENV` - El `NODE_ENV` cuando se inició el proyecto
* `__DEV__` - true, cuando `process.env.NODE_ENV` es `development`
* `__PROD__` - true, cuando `process.env.NODE_ENV` es `production`


Estilos
------

Este proyecto acepta tanto `.scss` como `.css`, configuradas mediante [CSS Modules](https://github.com/css-modules/css-modules).
Luego de ser importadas los estilos on procesados con  [PostCSS](https://github.com/postcss/postcss) para ser minificados y autoprefijados, luego serán extraidos a un un archivo `.css` durante la compilación a producción.


Testing
-------

Para agregar un test unitario, solo agrega un archivo con un sufijo `.spec.js` dentro de  `~/tests` (`counter_reducer.spec.js`, por ejemplo). Karma lee todos los archivos automáticamente en la carpeta `~/tests`.
Mocha y Chai están configurados para estar disponibles en esos archivos sin la necesidad de importarlos.

Los reportes de cobertura  serán compilados en `~/coverage` por defecto.
Si deseas cambiar que reportes están usados y donde se compilan los reportes, puedes modificar `coverage_reporters` en `~/config/index.js`.

Utilities
---------

Hay una pequeña utilidad (Gracias a [StevenLangbroek](https://github.com/StevenLangbroek)) para acelerar el proceso de desarrollo con Redux.
En `~/src/utils` hay un export de `createReducer` diseñado para ayudar en la creacion de reducers, definidos por Mapeo de Objetos en ves de un Switch.

Lo que alguna ves se vió como esto:

```js
import { TODO_CREATE } from 'constants/todo';

const initialState = [];
const handlers = {
  [TODO_CREATE] : (state, payload) => { ... }
};

export default function todo (state = initialState, action) {
  const handler = handlers[action.type];

  return handler ? handler(state, action.payload) : state;
}
```

Ahora puede verse así:

```js
import { TODO_CREATE }   from 'constants/todo';
import { createReducer } from 'utils';

const initialState = [];

export default createReducer(initialState, {
  [TODO_CREATE] : (state, payload) => { ... }
});
```


Troubleshoot
---------------

### `npm run dev:nw` produce in `cannot read location of undefined.`

Es probable que la nueva ventana para las dev-tools esté bloqueada por un popup blocker, o un blocker de publicidad, así que asegúrate de deshabilitarlo o agregar tu localhost a la whitelist.

Referencia: [issue 110](https://github.com/davezuko/react-redux-starter-kit/issues/110)

(Based on the cool framework [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) by [@davezuko](https://github.com/davezuko))

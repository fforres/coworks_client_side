Changelog
=========
0.1.8 (IN PROGRESS)
#### FEATURE
* Added geoloc Data.
* Added Profile Image upload.
#### FIX
* Fixes on visualization of images in list of coworks.


0.1.7
-----
#### FEATURE
* Added deep freeze for objects inside redux stores.
* Added form edition and form status controlled redux
* Updated Data to be editable only by the owner.
* Added Tabs Cowork Data form edition

#### FIX
* Removing red screen of death and sidebar to track states
* Fixed a bug where loading a cowork profile send an error whenever the data was taking to long
* Fixed cowork profile component to be presentational, moved logic into coworks view
* Fixed a bug where a duplicated entry was added into the history during navigation
* Fixed Gmap and Sidebar to be presentational components


0.1.6
-----
#### FEATURE
* Agregando Ruta de Perfil de usuario (/profile)
* Agregando Ruta de Visualizacion por Item (/profile)
* Cambio de estructura de app, agregando un segundo Template.
* Added - Visualizacion de Coworks creados por mi perfil

#### FIX
* Agregando más opciones a la api de FireBase (Agregando una api en caso de no poder utilizar un componente wrapper)
* Cambiando Anchor tags a Links de React Router
* Cambiando Blacklist de multiples stores, por whitelist de solo una.



0.1.5
-----
#### FEATURE
* Agregando WrapperComponent de notificaciones
* Agregando store para notificaciones
* Agregando notificaciones para registro y login/logout de usuarios.

#### FIX
* Bug donde el modal de login/registro impedía interactuar con los inputs de registro/ingreso.

0.1.4
-----
#### FEATURE
* Agregando Login con Facebook
* Agregando nugget de usuario cuando el usuario está registrado
* Agregando Persistencia del estado.
* Agregando sesion.

#### FIX
* Limpiando proyecto, eliminando local Data.

0.1.3
-----
#### FEATURE
* Logica de recentrado de mapas, en el click del pin, en el click de sidebar, en el click de navbar
* Agregando area desplegable al sidebar
<<<<<<< HEAD
* Implementación de FireBase
* Migración del backend a Firebase

#### FIX
* Cambio de identificación de Coworks

0.1.2
-----
#### FEATURE
* Agregado topbar
* Agregado Estilo por SASS

#### FIX
* Creando Component ToggleButton, separando la lógica de mueste/cierre de sidebar
* Cambio de Algunos CSS a FlexBox.
* Agregado el scrolling de la lista lateral
* Agregadas logica de show/hide y de dock/undock del sidebar
* Agregadas lógica de boton de visualizacion (dropdown izquierda o derecha)

0.1.1
-----
#### FIX
* Fix dependencias de redux-devtools, removiendo beta.
* Fix Package.json, name, versions, repos y demas
* Fix CHANGELOG.md

0.1.0
-----
#### FEATURES
* Agregado mapa
* Agregado sidebar
* Agregado listado al sidebar
* Agregado API local (.JSON files)
* Agregado store al sidebar
* Agregado store a los coworks
* Fixeados estilos del mapa y sidebar (No overlapping)
* Agregados Readme

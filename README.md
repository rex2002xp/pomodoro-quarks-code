[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

![Maintained][maintained-badge]
[![Travis Build Status][build-badge]][build]
[![Make a pull request][prs-badge]][prs]
[![License](http://img.shields.io/badge/Licence-MIT-brightgreen.svg)](LICENSE.md)


# Introduccion


La Técnica Pomodoro es un método para mejorar la administración del tiempo dedicado a una actividad. Fue desarrollado
por **Francesco Cirillo** a fines de la década de 1980. Se usa un temporizador para dividir el tiempo en intervalos indivisibles, 
llamados pomodoros, de 25 minutos de actividad, seguidos de 5 minutos de descanso, con pausas más largas cada cuatro pomodoros. 



## Mecánica básica

1. Decidir la tarea o actividad a realizar.
2. Poner el temporizador.
3. Trabajar en la tarea de manera intensiva hasta que el temporizador suene.
4. Hacer una marca para anotar qué pomodoro se ha completado.
5. Tomar una pausa breve.
6. Cada cuatro pomodoros, tomar una pausa más larga.


En el planeamiento, las tareas pueden venir de una lista "para hacer hoy". También se puede intentar estimar el esfuerzo que cada tarea podría requerir.

Durante el pomodoro, el foco es otorgado a una sola actividad o tarea.

Un objetivo esencial de la técnica es eliminar las interrupciones, tanto debido a uno mismo (internas), como a alguien más (externas). Esto se hace anotándolas rápidamente para atenderlas luego. Un pomodoro no se puede pausar ni dividir; si no es posible postergar la interrupción, el pomodoro se cancela para reiniciarlo luego.

Las pausas son dedicadas a relajar el foco, evitando cualquier actividad. Ayudan a hacer sostenible el trabajo.

Registrar un pomodoro completado es tanto para tener un sentimiento de logro como para tener una base de datos, sobre la que más tarde se hace una reflexión para mejorar.

La duración del pomodoro tradicional es de 25 minutos, el de las pausas cortas de 5 minutos y el de las largas de 20 minutos. Sin embargo, se pueden ajustar a los que funcionen mejor para cada persona. 



# Informacion Tecnica de la solucion.

La solucion es sencilla pero se utiliza Electron para generar la compilacion para los principales escritorios.

Actualmente corre con:

- Angular v9.0.2
- Electron v8.0.1
- Electron Builder v22.3.2

## Si deseas compilarlo

Clona el repositorio localmente:

``` bash
git clone git@github.com:rex2002xp/pomodoro-quarks-code.git
```

Instala las dependencias:

``` bash
npm install
```

## Tareas del package.json

|Command|Descripcion|
|--|--|
|`npm run ng:serve:web`| Corre la aplicacion en el navegador |
|`npm run build`| Compila la aplicacion. El built se genera en la carpeta /dist |
|`npm run build:prod`| Compila la aplicacion con Angular aot. El built se genera en la carpeta /dist |
|`npm run electron:local`| Compila la aplicacion y lanza electron
|`npm run electron:linux`| Compila la aplicacion y crea el ejecutable para linux |
|`npm run electron:windows`| Para Windows OS, Compila la aplicacion y crea el ejecutable para Windows |
|`npm run electron:mac`|  Para MAC OS, Compila la aplicacion y crea el binario `.app`|

## Branch & Packages version

- Angular 9 & Electron 8 : (master)

[build-badge]: https://travis-ci.org/maximegris/angular-electron.svg?branch=master&style=style=flat-square
[build]: https://travis-ci.org/maximegris/angular-electron
[license-badge]: https://img.shields.io/badge/license-Apache2-blue.svg?style=style=flat-square
[license]: https://github.com/maximegris/angular-electron/blob/master/LICENSE.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/maximegris/angular-electron.svg?style=social
[github-watch]: https://github.com/maximegris/angular-electron/watchers
[github-star-badge]: https://img.shields.io/github/stars/maximegris/angular-electron.svg?style=social
[github-star]: https://github.com/maximegris/angular-electron/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20angular-electron!%20https://github.com/maximegris/angular-electron%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/maximegris/angular-electron.svg?style=social
[maintained-badge]: https://img.shields.io/badge/maintained-yes-brightgreen


### Agradecimientos 

- Lorenzo - El Atareao - https://www.atareao.es  
Tus podcast definitivamente ayudan de mejorar nuestra productividad.
- Maxime GRIS  https://github.com/maximegris/angular-electron.git  
Tu proyecto de integracion de Angular con electron es de los mejores.


## RoadMap

- Agregar el contador de los periodos de pausas.
- Agregar un indicador de en cual pomodoro se va, y cuantos faltan para la pausa mayor.
- Registrar la hora de inicio y de fin de cada pomodoro, para tener el historico de los ultimos 10.


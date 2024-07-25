# Empezando con html

En esta tareita vamos a empezar a explorar un poquito que es HTML, para que lo vamos a usar y las reglas básicas que debemos seguir a la hora de escribirlo.

## ¿Qué es y qué no es html?

Verás que en internet hay mucha gente que discute si html es o no un lenguaje de programación. Lo que debes comprender es que es un lenguaje pero no es capaz el solo de implementar ninguna lógica compleja. Es un lenguaje estructural. HTML5 es el equivalente al esqueleto de una web. Si tiene funciones y lógica a la hora de construirse, pero solo lógica estructural.

![esqueleto](./skeleton-studio.jpg)

En nuestras webs podríamos pensar de la siguiente forma:

- `HTML -> Esqueleto`
- `JS ---> Músculo`
- `CSS --> Piel`

El esqueleto y los músculos juntos generan la lógica de un movimiento. Por eso aunque hay gente que dice que html no es un lenguaje que contenga ninguna lógica se equivocan. Depende del número de huesos que tu pongas en tu web luego tendrás una serie de articulaciones.

Esto no es más que una metafora a grandes rasgos para entenderlo mejor, pero hay que ser consicente de que tanto javascript como css pueden modificar este esqueleto creando partes nuevas así como modificandolas. Nuestro código html solo crea el punto inicial de nuestra web en cuanto a estructura.

## Documentación

HTML es un sistema de etiquetas o tags. Un tag en html típicamente sigue una estructura:

```html
<TAG>
</TAG>
```

Donde `<TAG>` es la "Apertura" de la etiqueta y `</TAG>` es el cierre.

Explicar todas las etiquetas con detalle nos llevaría mucho tiempo por eso lo mejor es que cuando te entren dudas sobre algún detalle relacionado con ellas utilices la siguiente web: [W3School](https://www.w3schools.com/html/).

W3School tiene muchos tutoriales buenos de html, css, y javascript. Nosotros solo vamos a usar la web como un refuerzo para nuestras lecciones en caso de que tengas dudas. Yo lo que espero es que si no te aclaras con algo aprendas a buscar información en internet sobre ello tu solo.

## La tarea

HTML sigue una estructura básica para crear una página. Quiero que leas la primera entrada de html en W3School y la entiendas. Después crea en la carpeta de Tarea 02 un archivo `index.html` que sea el esqueleto básico de nuestra web. Entiende bien las siguientes etiquetas:

- Doctype
- html
- header
- body
- h1, h2, h3, ...
- p
- br
- div

Una vez tengas claro para que sirve cada una quiero que en el archivo `index.html` crees una web que contenga unos cuantos parrafos de lorem ipsum. Si no sabes que es lorem ipsum te recomiendo que lo busques en wikipedia. También puedes usar [Chuiquito Ipsum](https://www.chiquitoipsum.com/) si quieres ser Don comedias.

Haz que tu web contenga al menos 1 vez cada una de las etiquetas que hemos mencionado arriba. Pero no hace falta que pongas mil títulos h1, h2, h3. Con que pongas 2 de tamaños distintos me vale.

Cuando tenga tu archivo listo, lo subes al repositiorio como en la anterior tarea y creas una pull request para que lo revise.

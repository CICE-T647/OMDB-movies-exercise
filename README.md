# OMDB movies.

## Introducción
¿Os acordais cuando teníamos nuestro archivo con nuestra películas simulando una api o base de datos externa? 
Muy práctico para empezar... pero poco eficiente si queremos crear una app. 

En la práctica de hoy usaremos una API de verdad: la versión cutre de IMDB: OMDB  😅😅  😓

En esta API encontraremos (no) todas las películas que queramos. 

Así que... En marcha!


## Requerimientos.

__1. Ve a la página de OMDB.__

```
http://www.omdbapi.com/
```

__2. En el menu, dirígete a API KEY.__

__3. Introduce los datos solicitados.__

__4. Hecho esto, recibirás un email. Deberás clickar sobre la segunda URL para activar la api_key.__

__5. Seguidamente recibirás un email con la api_key.__

Haz la petición de prueba y comprueba que funciona correctamente. 

```
Nota: En caso de que no funcione por alguna razón, solicítale al profesor una api_key que funcione. 
```

En la sección Parameters de la documentación encontrarás las posiles queries que puede recibir la API. Deja esta pestaña abierta, porque la necesitarás para realizar toda la práctica. 



## Iteracion 1: Busqueda por título

Crea un endpoint que permita buscar por título. Verás que hay dos opciones, una que permite buscar por título único, y otra que permite devolver todas las coincidencias encontradas. Deberás utilizar esta última. 

El endpoint deberá devolver todas las películas que haya devuelto la API. 


## Iteración 2: Filtro por tipo

Si con el endpoint anterior tratas de buscar Game of thrones, verás que nos devuelve la pelicul... __¡Un momento!__ ¿¿Pero esto no era una API de películas??

Filtra la búsqueda para que puedas buscar por películas o series.

¿Qué forma se te ocurre de introducir el tipo (serie o película) dentro de la query?

## Iteración 3: Paginación

Trata de hacer una búsqueda con una sola letra. 


¿Demasiados resultados, ehhh? Esto pasa por usar la versión cutre de IMDB. 

```
{
    "Response": "False",
    "Error": "Too many results."
}
```

Haz uso del parámetro page para intentar solucionar esto. 


__NO SIGAS LEYENDO HASTA QUE NO LO LOGRES IMPLEMENTAR__

.
.

No has podido evitar leerlo, ¿verdad? Bueno, sigamos igualmente.
Respuesta:

```
{
    "Response": "False",
    "Error": "Too many results."
}
```

Queda confirmado: los de OMDB definitivamente son unos p**** cutres y ni siquiera paginando nos permiten hacer queries muy largas ¡¡Al menos tenemos una funcionalidad adicional para nuestro front!!


Para solucionar el "too many results", tendremos que requerirle a nuestro front que las queries que nos envíen tengan al menos 3 letras, si no, devolveremos un error. 

## Iteración 4: Búsqueda por id.

OK! Si has llegado hasta aquí, quiere decir que has conseguida búsqueda que permiten traer (no) todas las películas y (no) todas las series y, además, paginar (solo a veces) nuestras búsquedas, pero los objetos que hasta ahora nos está devolviendo la cutre API de OMDB solo tienen 5 atributos. 

Usa el atributo imdbID que devuelven las busquedas anteriores para hacer una búsqueda por id y que nos de el objeto completo. 


Mucho mejor ¿Eh? 


Con esto ya tendríamos información suficiente para implementar una pequeña app. ¿Te atreves?



__HAPPY CODDING!!__


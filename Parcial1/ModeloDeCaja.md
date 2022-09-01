# Modelo de caja
El modelo de cajas es el comportamiento de CSS que hace que todos los elementos de las páginas se representen mediante cajas rectungulares. Cada una de estas cajas puede tener un borde que lo delimita, un margen interno y un margen externo. Podemos también definir otra serie de propiedades como su altura, su anchura, forma de verse, colores de fondo, etc.

## Partes del modelo de caja
![](https://saucedoinfo.github.io/guias/desarrollo/css/img/modelo-de-cajas.svg)

* **Content** (contenido): Es la parte interior del elemento. 
* **Padding** (relleno): Es el espacio entre el contenido y el borde de la caja.
* **Border** (borde): Es una línea que encierra completamente el contenido y su relleno.
* **Margin** (margen): Es el espacio entre el borde y los elementos exteriores.

Las propiedades padding, border, margin pueden referirse a los cuatro lados de la caja mediante las palabras top (superior), bottom (inferior), left (izquierda), y right (derecha).

![](https://www.aprende-web.net/css/objetos/esquema2.gif)

El relleno y el margen son transparentes, por lo que en el espacio ocupado por el relleno (padding) se muestra el color o imagen de fondo (si están definidos) y en el espacio ocupado por el margen (margin) se muestra el color o imagen de fondo de su elemento padre (el elemento que lo contiene).

Al igual que las etiquetas que las definen, las cajas pueden estar anidadas, una dentro de otra, lo cual puede crear un sistema bastante complejo para la estructura de la página.
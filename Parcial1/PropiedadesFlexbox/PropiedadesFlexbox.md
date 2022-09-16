# **Propiedades Flexbox**

## Propiedades de los padres

| Propiedades | Descripción | Valores |
| --------------------- | -------------------- | -------------------------------: |
| flex-direction | Cambia la orientación del eje principal | row, row-reverse, column, column-reverse|
| flex-wrap | Evita o permite el desbordamiento (multilinea) | nowrap, wrap, wrap-reverse |
| justify-content | Se utiliza para alinear los ítems del eje principal (por defecto, el horizontal) | flex-start, flex-end, center, space-between, space-around, space-evenly |
| align-items | Usada para alinear los ítems del eje secundario (por defecto, el vertical) | flex-start, flex-end, center, stretch, baseline |
| align-content | Usada para alinear cada una de las líneas del contenedor multilinea | flex-start, flex-end, center, space-between, space-around, space-evenly, stretch |
| align-self | Permite cambiar el comportamiento de align-items y sobreescribirlo con comportamientos específicos para ítems concretos que no queremos que se comporten igual que el resto | auto, flex-start, flex-end, center, stretch, baseline |

## Propiedades de los hijos

| Propiedades | Descripción | Valores |
| --------------------- | -------------------- | -------------------------------: |
| flex-grow | Número que indica el factor de crecimiento del ítem respecto al resto | 0 (**Number**) |
| flex-shrink | Número que indica el factor de decrecimiento del ítem respecto al resto | 1 (**Number**) |
| flex-basis | Tamaño base de los ítems antes de aplicar variación | (**size**) content |
| order | Número (peso) que indica el orden de aparición de los ítems | 0 (**Number**) |
| row-gap | Espacio entre filas (sólo si flex-direction: column) | normal (**size**) |
| column-gap | Espacio entre columnas (sólo si flex-direction: row) | normal (**size**) |
|


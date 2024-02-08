"""Seguimos con las tuplas"""
# Basicamente las tuplas son como las listas, la unica difrencia es que no se pueden modificar:
# No se Pueden Eliminar elementos, Añadir Elementos ni modificar elementos existentes

numeros = (1, 2, 3) + (4, 5, 6)

punto = [1, 2]
print(f'Imprimimos una lista con Números: {punto} ')

# Podemos convertir cualquier iterable en una tupla con el metodo 'tuple()'

PuntoTupla = tuple(punto)

print(
    f'Imprimimos una tupla de Valores generada con el metodo tuple() a partir de una lista: {PuntoTupla} ')

TuplaString = tuple('Hola Mi Hermano, dame la mano')

print(
    f'Imprimimos una tupla de Valores generada con el metodo tuple() a partir de "string": {TuplaString} ')

# Con esta operación lo que hacemos es generar una nueva tupla, a partir de una tupla existente

menosnumeros = numeros[2:4]
print(
    f'Imprimimos una tupla de Valores generada a partir de otra tupla: {menosnumeros} ')

# También podemos desempaquetar las tuplas. Pero en este caso nos dará como resultado una lista

primero, segundo, tercero, cuarto, *otros = numeros

print(f'Imprimimos Números A partir de Tupla:  {primero}, {tercero}, {otros}')

# También podemos interar una tupla
i = 0
for el in numeros:
    i += 1
    print(
        f'Vamos a Multiplicar por 3 e Imprimir los siguientes Números {i}: {el*3}')

# De la misma forma podemos Crear una lista a partir de una tupla con el método list
# Esto es así, puesto que las Tuplas son interables

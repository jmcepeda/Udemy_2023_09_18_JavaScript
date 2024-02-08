"""Seguimos aprendiendo con las Filas"""
# Las Filas Cumplen con las características de Ser FIFO
# First IN First OUT

from collections import deque

lista = [1, 2, 3, 4]

# Si Quisieramos eliminar un elmento, esto implicaría que habría ue mover todos los elementos de la lista
# Esto consumiría una gran cantidad de recursos. Por lo que bi sería buena idea trabajar así, pues
# Afectaría negativamente al funcionameinto de la Aplicación
lista2 = list(range(10000))

fila = deque(lista)

fila.append(5)
fila.append(6)
fila.append(7)
fila.append(8)

print(fila)

# Para Eliminar Elementos tendría que utilizar por ejemplo popleft
# popleft es un método específicio de deque()
# appendleft es un método específicio de deque()
# Para las listas no esxiste el método popleft() ni appendleft()

fila.popleft()

print(
    f"Ahora estamos imprimiento de nuevo la fila tras eliminar el primer elemento con popleft() {fila}")

fila.appendleft(99)

print(
    f"Ahora estamos imprimiento de nuevo la fila tras añadir un elemento en la primera posición con appendleft() {fila}")

if fila:
    print(f"Fila Con Datos: {fila}")

lista2 = list(fila)

for i in lista2:
    fila.popleft()
    if not fila:
        print(f"Fila Vacía: {fila}")
    else:
        print(f"Fila Con Datos: {fila}")

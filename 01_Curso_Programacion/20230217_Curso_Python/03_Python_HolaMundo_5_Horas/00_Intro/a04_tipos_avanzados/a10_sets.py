"""Seguimos con los sets. Vienen a ser Grupos o Conjuntos"""
# Set es una colección de datos que no puede repetirse y que no está ordenada

primer = {1, 1, 9, 1, 2, 4, 7, 1, 1, 2, 3, 6, 7, 83}

segundo = {9, 4, 7, 3, 6, 83}

tercero = {9, 4, 7, 3, 6, 83, 'a', 56, 67, 'c', 907}

print(
    f'Vamos a Imprimir el set para comprobar si hace o no un control de los elementos repetidos: {primer}. Es Curioso porque aunque no estaban ordenados alfabeticamente, al imprimir el set si que lo imprime ordenado')

# Los trabajos se trabajan de forma similar a como se trabaja con las listas
# El método pop funciona exactamente como con las listas pues no elimina el último elemento
# Parece que el método pop() elimina un elemento al azar (no está claro)
# pop()	Removes an element from the set

print(f'Imprimimos el set antes de eliminar {segundo}')

segundo.pop()

print('La Principal Conclusión es que no utilizaría pop() con los set')


print(
    f'Vamos a Imprimir el set para comprobar si se ha eliminado el último elemento del set {segundo}. "\n" Se Confirma que siempre se elimina el número menor ')


print(f'Imprimimos el set antes de eliminar {tercero}')

tercero.pop()

print(
    f'Vamos a Imprimir el set para comprobar si se ha eliminado el último elemento del set {tercero}. "\n" Se Confirma que siempre se elimina el número menor ')

# Los métodos add() y remove() son propios de los sets

primer.remove(4)

print(
    f'Vamos a Imprimir el set para comprobar si se ha eliminado el elemento "4" {primer}.')

primer.add(67)

print(
    f'Vamos a Imprimir el set para comprobar si se ha añadido el elemento "67" {primer}.')

# Ahora vamos a generar un set a partir de una lista
# Entiendo que la función set funciona para todo tipo de iterables
# Lo comprobaré también con un string

lista = [1, 3, 7, 9, 2, 44, 78]

set_lista = set(lista)

print(
    f'Imrpimir un set generado con el metodo set a partir de una Lista: {set}')


PALABRA = 'Damelo Todo Papi'

set_palabra = set(PALABRA)

print(
    f'Imrpimir un set generado con el metodo set a partir de una Lista: {set_palabra}')

# Ahora vamos a empezar con los métodos más caracteristicos de los sets

set1 = {1, 2, 3, 4, 5, 6, 7, 8}
set2 = {6, 7, 8, 9, 10, 11, 12, 13}

# Primer Operador set para Python Union |

aaa = set1 | set2

print(f'Vamos a hacer la Unión de dos sets set1 | set2: {aaa}')

# Segundo Operador set para Python Intersección &

bbb = set1 & set2

print(f'Vamos a hacer la Intersección de dos sets set1 & set2: {bbb}')

# Tercer Operador set para Python Diferencia -
# con esto sacamos los elementos en set1 que no están en set2

ccc = set1 - set2

print(f'Vamos a hacer la Diferencia de dos sets set1 - set2: {ccc}')

# Tercer Operador set para Python Diferencia Simétrica ^
# con esto sacamos los elementos en set1 que no están en set2 y los elementos del set2 que no están en set1

ddd = set1 ^ set2

print(f'Vamos a hacer la Diferencia Simetrica de dos sets set1 ^ set2: {ddd}')

# Uno de los principales problemas de los set es que no se encuentran ordenado
# Nosotros tampooc podemos acceder a un elemento del set

if 7 in set1:
    print(f'Toma mi rabo y corre. Al parecer 7 está en el set1: {set1}')

if 32 in set1:
    print(f'Toma mi rabo y corre. Al parecer 32 está en el set1: {set1}')
else:
    print(f'Toma pan y moja. Al parecer 32 NO está en el set1: {set1}')

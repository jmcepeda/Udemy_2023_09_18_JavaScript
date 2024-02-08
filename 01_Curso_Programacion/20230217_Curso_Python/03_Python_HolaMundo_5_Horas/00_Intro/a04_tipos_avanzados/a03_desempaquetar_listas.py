"""Desempaquetar Listas"""
numeros = [1, 2, 3]

# Este es un procedimiento Muy Feo
primero = numeros[0]
segundo = numeros[1]
tercero = numeros[2]

print(primero, segundo, tercero)

numeros2 = [1, 2, 3]

# Este es un procedimiento más adecuado
primero2, segundo2, tercero2 = numeros2

print(primero2, segundo2, tercero2)


# Este es un procedimiento más adecuado
numeros3 = [5, 6, 7]

# Al poner el asterisco delante indicamos que es un iterable
primero3, *otros = numeros3
print(primero3, otros)

# Este es un procedimiento más adecuado
numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Al poner el asterisco delante indicamos que es un iterable
primero4, segundo4, tercero4, *otros4 = numeros4
print(primero4, segundo4, tercero4, otros4)

# Este es un procedimiento más adecuado
numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Al poner el asterisco delante indicamos que es un iterable
primero5, segundo5, tercero5, *otros5, penultimo5, ultimo5 = numeros5
print(primero5, segundo5, tercero5, otros5, penultimo5, ultimo5)


def hola(iterable):
    print(iterable)
    for ele in iterable:
        print(f"Este es un Elemento del Iterable Introducido: {ele}")
    return "Rabo duro"


A = hola("Hola Asqueroso Mundo")

B = hola([1, 2, 3, 4, "Toma Rabo", "=", True])


def n(n1, n2, n3, n4):
    return n1+n2+n3+n4


lista = [1, 2, 3, 4, 5, 6, 7, 8]

print(lista)

print(*lista)

a = n(4, 5, 7, 8)

print(f'Vamos a suamar los siguientes valores: 4, 5, 7, 8: {a}')


def sumalista(listasuma):
    A = 0
    for B in listasuma:
        A += B
    return A


listasumar = [4, 5, 7, 8, 5, 7, 98, 23, 4, 12]

a = sumalista(listasumar)

print(f'Vamos a suamar los siguientes valores: {listasumar}: {a}')

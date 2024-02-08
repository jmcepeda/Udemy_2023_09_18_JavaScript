"""Seguimos con XARGS"""


def suma(a, b):
    """Funcion Suma"""
    print(a+b)


suma(3, 5)


def suma2(a, b, c):
    """Funcion Suma"""
    print(a+b+c)


suma2(3, 5, 7)

# Para Convertir en ITERABLE, el parámetro de una función se usa *parámetro


def suma3(*numeros):
    """Funcion Suma"""
    resultado = 0
    for numero in numeros:
        resultado += numero
    print(resultado)


suma3(3, 5, 7, 8, 3, 24)

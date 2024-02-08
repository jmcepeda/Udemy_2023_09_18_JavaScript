"""Vamos a Aprender sobre return"""


def suma(a, b):
    """Sumando"""
    resultado = a+b
    return resultado


print(suma(4, 5))

RESULTADO = suma(12, 13)

RESULTADO = suma(RESULTADO, 10)

print("El Resultado de la Operación es: ", RESULTADO)

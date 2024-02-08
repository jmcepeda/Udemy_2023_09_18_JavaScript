"""Revisamos que elementos toman valor Falsy"""

# Toman Valor Falsy:
#  - not Lista Vacía
#  - not String Vacío ""
#  - not Valor Cero 0

LISTA = []
LISTA2 = [1, 3, 4]

CADENA = ""
CADENA2 = "Hola Mundo"

VALOR = 0
VALOR2 = 1234

if not LISTA:
    print(
        f"Prueba para verificar que Lista Vacía evaluado como 'not lista' devuelve True cuando la lista está vacía: {not LISTA}")

if not CADENA:
    print(
        f"Prueba para verificar que cadena Vacía evaluado como 'not cadena' devuelve True cuando la cadena está vacía: {not CADENA}")

if not VALOR:
    print(
        f"Prueba para verificar que Valor Cero evaluado como 'not calor' devuelve True cuando el valor es cero: {not VALOR}")


print(
    f"Prueba para verificar que Lista NO Vacía evaluado como 'not lista' devuelve FALSE cuando la lista NO está vacía: {not LISTA2}")


print(
    f"Prueba para verificar que cadena NO Vacía evaluado como 'not cadena' devuelve FALSE cuando la cadena NO está vacía: {not CADENA2}")


print(
    f"Prueba para verificar que Valor Cero evaluado como 'not calor' devuelve FALSE cuando el valor es cdistinto de cero: {not VALOR2}")

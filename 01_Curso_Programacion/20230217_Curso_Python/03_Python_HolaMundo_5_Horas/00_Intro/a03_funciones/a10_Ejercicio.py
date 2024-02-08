"""Vamos a hacer el Ejercicio. Palindromos"""

# Vamos a hcer una función que consiste en comprobar si un string que se le pase a la función es un palíndromo o no.

# El primer paso para comprobar si es un palíndromo o no es eliminar los espacios en blanco.
# La segunda parte de la Función consistirá en dar la invertir el orden de los caracteres


def es_palindromo(cadena):
    cadena_sin_espacios = ""
    new_cadena = ""
    for str in cadena:
        if str != " ":
            cadena_sin_espacios += str.lower()
            new_cadena = str.lower()+new_cadena
    print(cadena_sin_espacios, new_cadena)
    if cadena_sin_espacios == new_cadena:
        return f"La Cadena de Caracteres: {cadena} SI es un Palíndromo "
    else:
        return f"La Cadena de Caracteres: {cadena} NO es un Palíndromo "


print(es_palindromo("Abba"))

print(es_palindromo("Reconocer"))

print(es_palindromo("Hola Mundo"))

print(es_palindromo("AMo la PAlOmA"))

print(es_palindromo("Perra Judía"))

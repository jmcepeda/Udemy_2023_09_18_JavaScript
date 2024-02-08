"""Continuamos analizando alcance de las variables"""

# Contexto Global. Puede Accederse a esta variable desde cualquier parte de este archivo alcance.py
# Variables Globales es una MALA PRACTICA
# Una BUENA PRACTICA es usar variables LOCALES

SALUDO = "Hola Global"


def saludar():
    """Saludo"""
    # Nos Va a lanzar Error, dado que no se ha asociado ningún valor previamente
    SALUDO = "Hola Mundo"
    print("Imprimiendo SALUDO de Scope Local saludar: ", SALUDO)


def saluda_chanchito():
    """Saludo Chanchito"""
    SALUDO = "Hola Chanchito"
    print("Imprimiendo SALUDO de Scope Local saluda_chanchito: ", SALUDO)


def saluda_chanchito_global():
    """Saludo Chanchito"""
    # Es una excepción, pero si en algún caso es necesario hacer uso de variables globales, la forma de hacerlo es la siguiente
    global SALUDO
    SALUDO = "Hola Global Modificada desde Scope Local"
    print("Imprimiendo SALUDO de Scope Local saluda_chanchito_global: ", SALUDO)


print("Imprimiendo SALUDO de Scope Global: ", SALUDO)

saludar()

# A diferencia de lo que podría pensarse, el Valor de la Variable 'SALUDO' en el Scope Global no se modifica per se en variables locales, dentro de una función.

print("Imprimiendo SALUDO de Scope Global: ", SALUDO)

saluda_chanchito()

print("Imprimiendo SALUDO de Scope Global: ", SALUDO)

saluda_chanchito_global()

print("Imprimiendo SALUDO de Scope Global: ", SALUDO)

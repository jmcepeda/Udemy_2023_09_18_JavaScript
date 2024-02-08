"""Descripción del ejercicio que hay que realizar"""
# 1. Eliminar los espacios en blando de un String
# y devuelve lista con caracteres restantes
# 2. Contar en un diccionario cuanto se repiten
# los caracteres de un string
# 3. Ordenar las llaves de un diccionario por el valor que tienen
# y devolver una lista que contenga tuplas [("a",2), ("b",4)]
# 4. De un listado de tuplas, devolver las que tengan el mayor mayor
# 5. Crear una mensaje que diga:
# Los caracteres que más se repiten con X repiticiones son:

# Tenemos que importar operator para poder ordenar un diccionario por los valores
# Por defecto el metodo sorted ordena por claves, no por valor
import operator

from pprint import pprint


def eliminaespacios(cadena):
    """Con esta función eliminamos espacios en Blanco de un string y devolvemos una lista"""
    lista2 = []
    for ele in cadena:
        if ele != " ":
            lista2.append(ele)
    return lista2


def eliminaespacios2(cadena):
    """Esta es una manera más elegante de eliminar los espacios en blanco de un string"""
    # El uso de Comprehensive List Listas Comprensivas
    lista3 = [char for char in cadena if char != " "]
    return lista3


def agrupacuentacaracteres(lista):
    """Con esta Función Agrupamos y contamos los caracteres de una lista en un diccionario"""
    dicc2 = {}
    for car in lista:
        if car in dicc2:
            dicc2[car] += 1
        else:
            dicc2[car] = 1
    return dicc2


def ordenadicc(diccionario):
    """Con esto ordenamos el diccionar en base al numero de veces que se repite una letra,
     recogido en el valor del par de datos KEY, VALUE de cada letra"""
    # Con diccionario.items() obtengo una tupla para cada par de valores del diccionario.
    nuevodicc = dict(
        sorted(diccionario.items(), key=operator.itemgetter(1), reverse=True))
    # print(nuevodicc)

    # Otra manera de ordenar un diccionario por el valor y no por la key es aplicando una función lambda
    nuevodicc2 = sorted(dicc.items(), key=lambda ele: ele[1], reverse=True)
    # Es importante tener en cuenta que sorted() devuelve una lista de tuplas
    # pprint(nuevodicc2, width=10)

    nuevalista = []
    max = 0
    for ele in nuevodicc:
        nuevalista.append((ele, nuevodicc[ele]))
        if max < nuevodicc[ele]:
            max = nuevodicc[ele]
    # print(nuevalista)
    return nuevalista, max


def tuplasmayores(listatuplasord, nummax):
    listacaract = []
    print(f"Los caracteres que más se Repiten son:")
    for ele in listatuplasord:
        # print(ele)
        # print(ele)
        if ele[1] == nummax:
            listacaract.append(ele[0])
            print(f" - {ele[0]} con {ele[1]} repeticiones.")

    # print(
    #     f"Los Caracteres que más se Repiten son {listacaract}. Se repiten {nummax} veces cada uno de estos Caracteres")


COMPROBACION = False
entrada = input(
    "Por favor, introduce un Texto en el que quieras que analicemos los caracteres: ")
while COMPROBACION:
    if entrada != "":
        COMPROBACION = True
        break
    else:
        entrada = input(
            "Por favor, introduce un Texto con ¡¡¡Algunos Caracteres!!! que quieras que analicemos los caracteres: ")

lista = eliminaespacios(entrada)

# print(lista)

# print(eliminaespacios2("Hola Puto Mundo"))

dicc = agrupacuentacaracteres(lista)

# Con el método items, obtenemos pares de valores en forma de tupla

for key, valor in dicc.items():
    print(
        f'Estos son los pares de valores KEY: {key}: VALOR: {valor}. Sacados de la Tupla que entrega dicc.items()')

pprint(dicc, width=1)

listatuplasord, nummax = ordenadicc(dicc)

tuplasmayores(listatuplasord, nummax)

# Texto de Prueba para introducir y probar como funciona
# aaaaaaaaaaaaa bbbbbbbbbbbb ccccccccc hhhhhhhhhhh rrrrrrrrrr yyyyyyyyyy b cc rrr cc

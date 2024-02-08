"""Seguimos con el estudio del operador de desempaquetar"""

lista1 = [1, 2, 3, 4, 5, 6, 7, 8]

print(lista1)

lista2 = [9, 10, 11, 12, 13, 14]

agregada = [lista1, lista2]

combinada = [*lista1, *lista2]

print(
    f'Esta es la diferencia entre agregar y combinar dos listas.\n Agregada: {agregada}. \n Combinada: {combinada} ')

combinada_total = [*lista1, 33, 56, 'rabo duro', *lista2, 'dale y toma', 78]
print(combinada_total)

# El Operador de desempaquetamiento también puede usarse para los diccionarios
# Con la Diferencia de que se usan ** en ve un *


puntos1_a = {'x': 25}

puntos1_b = {'y': 32}

punto1_comb = {**puntos1_a, **puntos1_b}

puntos2_a = {'x': 45}

puntos2_b = {'y': -54}

punto2_comb = {**puntos2_a, **puntos2_b}

print(
    f'Esta es resultado de combinar dos diccionarios. Combinada: {punto1_comb} y {punto2_comb}')


nuevo_punto = {**puntos1_a, **puntos1_b, "z": 28}

print(
    f'Esta es resultado de combinar tres diccionarios. : {nuevo_punto}')


# Esto no es mas que combinar diccionarios en una lista, es por esto que usamos el operador de desmpaquetamiento de listas * y no el operador de desempaquetamiento de diccionarios **
puntos1 = [{'x': 25, 'y': 32}, {'x': 45, 'y': 77}]

puntos2 = [{'x': -35, 'y': 39}, {'x': 62, 'y': -54}]

agregada_dicc = [puntos1, puntos2]

combinada_dicc = [*puntos1, *puntos2]

print(
    f'Esta es la diferencia entre agregar y combinar dos diccionarios en una lista.\n Agregada: {agregada_dicc}. \n Combinada: {combinada_dicc} ')

combinada_total_dicc = [*puntos1, {'x': 32, 'y': -91},
                        *puntos2, {'x': 58, 'y': -36}]
print(combinada_total_dicc)

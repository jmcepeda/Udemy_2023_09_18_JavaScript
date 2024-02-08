"""Continnuamos ordenando listas"""

# Vamos a ir aprendiendo diferentes métodos para ordenar las listas

numeros = [2, 6, 3, 56, 67, 34, 89, 123, 45, 43, 88, 900, 467, 42, 84]
letras = ['a', 'c', 'b', 'h', 'v', 'g', 'p', 'k', 'd', 'y']

print(f"Listado de Números Sin Ordenar: \n{numeros} ")

print(f"Listado de Letras Sin Ordenar: \n{letras} ")

# Utilizando el método .sort() podemos ordenar listas

numeros.sort()

letras.sort()

print(f"Listado de Números Ordenados: \n{numeros} ")

print(f"Listado de Letras Ordenadas: \n{letras} ")

# Ahora Vamos a ordenar las listas en un orden determinado
numeros.sort(reverse=True)

letras.sort(reverse=True)

print(f"Listado de Números Ordenados: \n{numeros} ")

print(f"Listado de Letras Ordenadas: \n{letras} ")

usuarios = [[6, 'Chanchito Feliz'], [4, 'Antonio Felipe'],
            [3, 'Simon García'], [5, 'Juan Diego Díaz']]

print(f"Listado de Usuarios Sin Ordenar: \n{usuarios} ")

# Ahora Vamos a Ordenar el Listado de Usuarios

usuarios.sort()

print(f"Listado de Usuarios Ordenadas: \n{usuarios} ")

# Ahora Vamos a ordenar listado dentro de listados o Listado de Tuplas, podemos pasando una función


def ordena(elemento):
    """Esta Función lo que hace es dar a ordena el campo de la lista qiue queremos usar para ordenar """
    return elemento[1]

# Es importante tener en cuenta que cuando se le pasa la función ordena como parámetro no se quiere ejecutar la fucnión ordena(). Es por esto que al pasar la función ordena como parámetro no se pasa así 'ordena()', porque eso ejecutaria la función y no es eso lo que queremos, lo que queremos es pasar una referencia y por eso no se ponen los parentesis 'ordena()'. Si pasaramos los parámetros se ejecutaria la función y no funcionaria correctamente pues tomaría siempre el mismo valor de la función, el que pasamos al ejecutar la función. Es por esto que la función ordena se pasa como parámetro.


usuarios.sort(key=ordena, reverse=True)
print(f"Listado de Usuarios Ordenadas: \n{usuarios} ")

# Vamos a usar otra manera más elegante de hacer esto.
# Vamos a usar las funciones lambda

usuarios2 = [[6, 'Chanchito Feliz'], [4, 'Antonio Felipe'],
             [3, 'Simon García'], [7, 'Lourdes Rodriguez'], [5, 'Juan Diego Díaz'], [2, 'Paco Madera']]


# usuarios2.sort(key=lambda parametros: valorRetorno, reverse=True )

usuarios2.sort(key=lambda elemento: elemento[1], reverse=True)

# Al usuar una 'función lambda' o 'funciones anónimas' nos ahorramos
# - Tener  que usar la palabra reservada 'def'
# - Entregarle un nombre a la función
# - Tener que pasarle los paréntesis
# - Tener que usar la palbra reservada 'return'

# Es una buena práctica usar funciones lambdas si no se vuelven a usar estas funciones,

print(f"Listado de Usuarios Ordenadas con una Función lambda: \n{usuarios2} ")

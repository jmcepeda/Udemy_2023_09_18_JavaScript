"""Seguimos con los Diccionarios unos elementos muy importantes en Python"""

# Es importante tener en cuenta que para signar un valor a una llave (key) dentro de un diccionario
# Y para poder acceder al valor asignado a una llave (key) es necesario hacer referencia a la key metiendo en commillas dobles "key", da error si hacemos referencia a la key con comillas simples 'key'

punto = [{'x': 25, 'y': 32}, {'x': 45, 'y': 77}]

dicciona = {'x': 45, 'y': 77}

print(f'Esto es una prueba de acceso a diccinarios: {punto[0]}')

a = punto[0]

print(f'Esto es una prueba de acceso a diccinarios: {dicciona["x"]}')

print(f'Esto es una prueba de acceso a diccinarios: {a["x"]}')

print(f'Esto es una prueba de acceso a diccinarios: {punto[0]["x"]}')

# Para evitar errores en caso de que no exista una llave determinada
if "lala" in punto[0]:
    print(
        f'Imprimimos el valor del dato que cuenta con la llave "lala": {punto[0]["lala"]}')
else:
    print('No existe la llave "lala" en diccionario punto[0]')

if "y" in punto[0]:
    print(
        f'Imprimimos el valor del dato que cuenta con la llave "y": {punto[0]["y"]}')
else:
    print('No existe la llave "lala" en diccionario punto[0]')

# Los Diccionarios tienen el método get() para acceder a valores del método

valor = punto[0].get("y")

print(
    f"Estamos accediendo al un valor de un diccionario a partir del método get(): {valor}")

valor2 = punto[0].get("lala")
print(
    f"Podemos comprobar que con el metodo get() no se genera error si pasamos una key que no existe en el diccionario: {valor2}")

valor3 = punto[0].get(
    "lala", "Comete un rabo, esta key no existe en el diccionario")
print(
    f"Podemos pasar un valor por defecto al método get() de que la key que se pase no existe en el diccionario: {valor3}")

# Existen métodos para eliminar elementos de un diccionario
# Empezamos con la paralabra reservada del
# Con esto lo que hacemos es eliminar el elemento que tiene consignada una key a la que se hace referencia con em método y/o palabra reservada del

del punto[0]["x"]

print(
    f'Imprimimos la lista de diccionarios tras aplicar la palabra reservada "del" al diccionario: {punto}')

del (punto[1]["x"])

print(
    f'Imprimimos la lista de diccionarios tras aplicar la palabra reservada "del" al diccionario: {punto}')

# Ahora vamos a actualizar el valor de un dato vinculado con una llave

punto.append({"x": 46, "y": 98})

print(punto)

punto[2]["y"] = "79"

print(punto)

# Ahora vamos a iterar primero la lista y luego los diccionarios

for dicc in punto:
    for valor in dicc.items():
        print(
            f"Dentro de este diccionario: {dicc} vamos a ir sacando elementos del diccionario en forma de tuplas: {valor}"
        )

# Iterando un diccionario accedo a los valores en forma de tuplas, pares de valores, key y valor y por tanto puedo desempaquetar la tupla facilmente y acceder al valores de la key y del valor asignado
for dicc in punto:
    for key, value in dicc.items():
        print(
            f"Dentro de este diccionario: {dicc},  vamos a ir imprimiento los diferentes elementos: {key}: {value}"
        )

# A Continuación Vamos a hacer un uso más realista de los diccionarios
# Vamos a tener listas de diccionarios

usuarios = [
    {"name": "Pablo Alberto", "age": 34},
    {"name": "Alejandro", "age": 91},
    {"name": "Mario", "age": 67},
    {"name": "Jose", "age": 45},
]

for usuario in usuarios:
    print(f'\nEstamos revisando el usuario: {usuario}')
    for key, valor in usuario.items():
        print(f'El Usuario tiene {key}: {valor}')

for usuario2 in usuarios:
    print(f'\n{usuario2}')
    print(
        f'El Usuario: {usuario2["name"]} tiene la siguiente edad: {usuario2["age"]}.')

for usuario2 in usuarios:
    print(usuario2["name"])

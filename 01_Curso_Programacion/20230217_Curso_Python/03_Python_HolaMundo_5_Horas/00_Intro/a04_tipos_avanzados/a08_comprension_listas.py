"""Seguimos Aprendiendo de Listas de Comprensión"""

usuarios = [[6, 'Chanchito Feliz'],
            [4, 'Antonio Felipe'],
            [3, 'Simon García'],
            [7, 'Lourdes Rodriguez'],
            [5, 'Juan Diego Díaz'],
            [2, 'Paco Madera']]

# Vamos a pasar de un listado de usuarios a Listado de nombres
nombres = []
for usuario in usuarios:
    nombres.append(usuario[1])

print(
    f"Estamos Imprimmiento el Listado de nombres de una lista de Usuarios: {nombres}.")

# Hay una manera mucho más rápida y elegante de sacar una lista de nombre de una lista e usuarios
# Esto es con el uso de Comprehension List, Listas de Compresión

nombres2 = [usuario[1] for usuario in usuarios]

print(
    f"Estamos Imprimmiento el Listado de nombres de una lista de Usuarios aplicando Listas Comprensivas: {nombres2}.")

# Ahora Vamos a Filtrar nuestro usuarios
usuarios_filtrados = [usuario for usuario in usuarios if usuario[0] > 4]

print(
    f"Estamos Imprimmiento el Listado de usuarios filtrados por id aplicando Listas Comprensivas: {usuarios_filtrados}.")

# Ahora Vamos a Filtrar nuestro usuarios
nombres_filtrados = [usuario[1] for usuario in usuarios if usuario[0] > 4]

print(
    f"Estamos Imprimmiento el Listado de nombres de una lista de Usuarios filtrados por id aplicando Listas Comprensivas: {nombres_filtrados}.")

# Seguimos con las operaciones de map y filter
# La mejor manera de trabajar con listas para filtrar y modificar son las Comprehensive lists Listas Comprensivas
# Pero no está de más saber como se trabaja con Listas con estos métodos

# En esta ocasión tenemos que utilizar Lambda Functions.
# Las Lambda Functions 'lambda [parámetro(que se pasa a la función)]: [Valor de Retorno]' Sin uso de Corchetes
# Con map y filter, no podemos filtrar y mapear de forma simultánea, hay que hacerlo en dos pasos, es por esto que es mucho más util el uso de Comprehension List

nombres3 = list(map(lambda usuario: usuario[1], usuarios))

print(
    f"Estamos Imprimmiento el Listado de nombres de una lista de Usuarios aplicando map y lambda function: {nombres3}.")

usuarios_filtrados_3 = list(
    filter(lambda usuario: usuario[0] > 4, usuarios))

print(
    f"Estamos Imprimmiento el Listado de usuarios filtrados por id aplicando filter y Lambda Function: {usuarios_filtrados_3}.")

nombre_usuarios_filtrados_3 = list(
    map(lambda usuario: usuario[1], usuarios_filtrados_3))
print(
    f"Estamos Imprimmiento el Listado de nombres de una lista de Usuarios aplicando Map y lambda function sobre una lista resultado de aplicar filter previamente: {nombre_usuarios_filtrados_3}.")

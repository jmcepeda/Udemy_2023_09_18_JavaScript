"""Continuamos Buscando Elementos dentro de una lista"""
# Una Lista es un Iterable, al igual que un string o una tupla o el resultado de aplicar range()
mascotas = ["Pelusa", "Wolfgang", "Pulga",
            "Chanchito Feliz", "Felipe", "Wolfgang"]

# Podemos hacer uso del método .index(). Me devuelve la Posición del Elemento en la Lista
# Es importante recordar que las posición en listas se inicia en '0'

print("Esta es la Primera Prueba:", mascotas.index("Pulga"))

# Con esto podemos saber si existe un elemento en una lista
if "Wolfgang" in mascotas:
    print("Esta es la Segunda Prueba:", mascotas.index("Wolfgang"))


# Pero sería muy interesante saber cuantas veces se repite un elemento en una lista
# Para esto podemos usar el método .count()
if "Wolfgang" in mascotas:
    print("Esta es la Tercera Prueba:", mascotas.count("Wolfgang"))

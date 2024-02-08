"""Continuamos Agregando y Eliminando elementos en una Lista"""
# Una Lista es un Iterable, al igual que un string o una tupla o el resultado de aplicar range()
mascotas = ["Antonio", "Wolfgang", "Martín", "Pelusa", "Wolfgang", "Pulga",
            "Chanchito Feliz", "Felipe", "Wolfgang", "Ramón"]

print(f"Imprimimos las mascotas Inicialmente: '\n'{mascotas}")

# Con el métddo .insert puedo añadir un nuevo elemento con la posición que quiera dentro de la list
mascotas.insert(1, "Roberto")

print(
    f"Imprimimos las mascotas tras añadir una mascota con el método .insert.(): '\n'{mascotas}")

# Con el método .append puedo añadir un nuevo elemento al final de mi lista
mascotas.append("Alberto")

print(
    f"Imprimimos las mascotas tras añadir una mascota con el método .append(): '\n'{mascotas}")


# Con el método .remove puedo eliminar el elemento que quiera de mi lista pero debe indicar exactamente el valor de lo que quiero eliminar. Si el Elemento estuviera repetido, tendré de eliminarlo varias veces
mascotas.remove("Wolfgang")

print(
    f"Imprimimos las mascotas tras eliminar una mascota con el método .remove(): '\n'{mascotas}")

# Con el método .pop puedo eliminar el último elemento de mi lista
mascotas.pop()

print(
    f"Imprimimos las mascotas tras eliminar una mascota con el método .pop(): '\n'{mascotas}")

# Con el método .pop puedo eliminar también cualquier elemento de mi lista. Debo pasarle el indice del elemento de la lista que quiero eliminar.
mascotas.pop(0)

print(
    f"Imprimimos las mascotas tras eliminar una mascota con el método .pop(): '\n'{mascotas}")

# Con la palabra reservada 'del' podemos eliminar tambiñé cualquier  elemento de mi lista. Debo psarle el indice del elemento de la lista que quiero eliminar.
del mascotas[1]

print(
    f"Imprimimos las mascotas tras eliminar una mascota con el la palabra reservada del : '\n'{mascotas}")

# Con el método clear() podemos eliminar todos los elementos de mi lista.
mascotas.clear()

print(
    f"Imprimimos las mascotas tras eliminar todos los elementos con el método .clear() : '\n'{mascotas}")

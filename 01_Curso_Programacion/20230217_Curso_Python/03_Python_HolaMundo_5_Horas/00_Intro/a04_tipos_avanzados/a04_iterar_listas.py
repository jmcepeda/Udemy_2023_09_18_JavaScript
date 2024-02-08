"""Continuamos Iterando Listas"""
# Una Lista es un Iterable, al igual que un string o una tupla o el resultado de aplicar range()
mascotas = ["Pelusa", "Pulga", "Chanchito Feliz", "Felipe"]

for mascota in mascotas:
    print(f"Esta es una de mis mascotas: {mascota}")

# Enumerate Devuelve una Lista de tuplas
for mascota in enumerate(mascotas):
    print(f"Esta es una de mis mascotas: {mascota}")

for mascota in enumerate(mascotas):
    print(
        f"Esta es la mascota Número {mascota[0]+1} de mis mascotas: {mascota[1]}")

print("\n")
for indice, mascota in enumerate(mascotas):
    print(
        f"Esta es la mascota Número {indice+1} de mis mascotas: {mascota}")

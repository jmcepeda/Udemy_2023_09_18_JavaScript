"""Manipulando Listas"""

mascotas = ["Wolfgang", "Pelusa", "Pulga", "Copito",
            "Tyron", "Jako", "Cira", "Nieve", "Bolita"]

print(mascotas[0])

mascotas[0] = "Bicho"
print(mascotas[0])
print(mascotas)

print(mascotas[0:3])

print(mascotas[:3])

print(mascotas[2:])

print(mascotas[-1])

print(mascotas[-2])


print(mascotas[::1])
print(mascotas[::2])
print(mascotas[::3])
print(mascotas[1::3])

numeros2 = list(range(0, 21, 2))
print(numeros2)

numeros2 = list(range(0, 21))
print(numeros2)

numeros2 = list(range(0, 21))
print(numeros2[::2])

numeros2 = list(range(0, 21))
print(numeros2[1::2])

numeros3 = list(range(1, 21))
print(numeros3[::2])

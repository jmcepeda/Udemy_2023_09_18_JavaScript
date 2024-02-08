"""Analizamos el Condicional 'If'"""

# EDAD = 15
EDAD = int(input("Por Favor, Introduce Tu Edad: "))

if EDAD > 65:
    print("Puedes ver la Pelicula con un SUPER-Descuento")
elif EDAD > 55:
    print("Puedes ver la Pelicula con Descuento")
elif EDAD >= 18:
    print("Puedes ver la Pelicula")
else:
    print("No Puedes Entrar a Ver la Película")

print("Listo")

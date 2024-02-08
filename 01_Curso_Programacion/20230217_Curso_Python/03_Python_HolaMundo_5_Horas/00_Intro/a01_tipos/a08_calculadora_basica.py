"""Seguimos con Ejercicio de Calcladora Básica"""

N1 = int(input("Introduce Primer Número: "))
N2 = int(input("Introduce Segundo Número: "))

SUMA = N1+N2
RESTA = N1-N2
MULTI = N1*N2
DIV = N1/N2

mensaje = f"""
Para los números {N1} y {N2},
el resultado de la SUMA es: {SUMA}
el resultado de la RESTA es: {RESTA}
el resultado de la MULTIPLICACIÓN es: {MULTI}
el resultado de la DIVISIÓN es: {DIV}

"""
print(mensaje)

print(N1, N2)
print(N1 + N2)

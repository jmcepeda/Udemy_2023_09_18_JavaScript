"""Seguimos con las Cadena de Comparadores"""

EDAD = int(input("Por Favor, Introduce tu EDAD: "))

print('Sin Aplicar Cadena de Comparadores')
if EDAD > 18 and EDAD < 65:
    mensaje2 = f"Puedes Entrar en la Piscina, Tienes {EDAD}, eres mayor de edad."
else:
    mensaje2 = f"No Puedes Entrar en la Piscina, Tienes {EDAD} años, eres menor de edad o tienes más de 65 años."


print(mensaje2)

print("Aplicando Cadena de Comparadores")
# Esto Solo pude aplicarse cuando concatenamos compoaraciones que deban cumplirse simultáneamente, Aplicando "And"
if 65 > EDAD > 18:
    mensaje3 = f"Puedes Entrar en la Piscina, Tienes {EDAD}, eres mayor de edad."
else:
    mensaje3 = f"No Puedes Entrar en la Piscina, Tienes {EDAD} años, eres menor de edad o tienes más de 65 años."


print(mensaje3)

print('Aplicando Solución Básica Genérica')
if EDAD < 18:
    mensaje = f"No Puedes Entrar en la Piscina, Tienes {EDAD} años, eres menor de edad."
elif EDAD < 65:
    mensaje = f"Puedes Entrar en la Piscina, Tienes {EDAD}, eres mayor de edad."
else:
    mensaje = f"No Puedes Entrar en la Piscina, Tienes {EDAD}, tienes más de 65 años."

print(mensaje)

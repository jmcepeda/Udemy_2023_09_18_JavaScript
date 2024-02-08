"""Seguimos con Operador Ternario para Comparador 'If'"""

EDAD = 15

if EDAD > 17:
    mensaje = f"La Edad de: {EDAD} Es Mayor que 17"
else:
    mensaje = f"La Edad de: {EDAD} Es Menor que 17"

print(mensaje)


NuevoMensaje = f"Edad de: {EDAD} Mayor que 17" if EDAD > 17 else f"Edad de: {EDAD} Menor que 17"

print('Otra Forma Alternativa de Sintetizar: ', NuevoMensaje)

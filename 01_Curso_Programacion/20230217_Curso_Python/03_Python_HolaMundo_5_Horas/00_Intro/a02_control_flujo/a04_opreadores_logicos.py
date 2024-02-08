"""Seguimos con los Operadores Lógicos"""
# and, or, not

# También Vamos a Ver Operador de Cortocircuito

# Operador de Cortocircuito
# Es una manera que tiene Python de optimizar recursos, para no evaluar el resto de
# Operaciones cuando ya se sabe de antemano que el resultado de la Operación
# Pero no hay que escribir nada adicional, es la forma de trabajar con Operadores Lógicos de Python

GAS = False
ENCENDIDO = False
EDAD = 15

MENSAJE10 = 'El Vehículo está listo para emprender la marcha' if GAS and ENCENDIDO and EDAD >= 18 else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=False, ENCENDIDO=True, EDAD=15.  not GAS and (ENCENDIDO or EDAD>=18)', MENSAJE10)


# Resto de Operadores Lógicos

GAS = True
ENCENDIDO = True

if GAS and ENCENDIDO:
    MENSAJE = 'El Vehículo está listo para emprender la marcha'
else:
    MENSAJE = 'El Vehículo NO está preparado para emprender la marcha'

MENSAJE2 = 'El Vehículo está listo para emprender la marcha' if GAS and ENCENDIDO else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=True, ENCENDIDO=True. GAS and ENCENDIDO', MENSAJE)

print('GAS=True, ENCENDIDO=True. GAS and ENCENDIDO', MENSAJE2)


GAS = True
ENCENDIDO = False

MENSAJE3 = 'El Vehículo está listo para emprender la marcha' if GAS and ENCENDIDO else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=True, ENCENDIDO=False. GAS and ENCENDIDO', MENSAJE3)

GAS = True
ENCENDIDO = False

MENSAJE4 = 'El Vehículo está listo para emprender la marcha' if GAS or ENCENDIDO else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=True, ENCENDIDO=False. GAS or ENCENDIDO', MENSAJE4)

GAS = False
ENCENDIDO = False

MENSAJE5 = 'El Vehículo está listo para emprender la marcha' if GAS or ENCENDIDO else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=True, ENCENDIDO=False. GAS or ENCENDIDO', MENSAJE5)


GAS = False
ENCENDIDO = False

MENSAJE5 = 'El Vehículo está listo para emprender la marcha' if not GAS or ENCENDIDO else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=True, ENCENDIDO=False. not GAS or ENCENDIDO', MENSAJE5)


GAS = True
ENCENDIDO = True
EDAD = 18

MENSAJE6 = 'El Vehículo está listo para emprender la marcha' if GAS and ENCENDIDO and EDAD >= 18 else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=True, ENCENDIDO=True, EDAD=18.  GAS and ENCENDIDO and EDAD>=18', MENSAJE6)


GAS = True
ENCENDIDO = True
EDAD = 15

MENSAJE7 = 'El Vehículo está listo para emprender la marcha' if GAS and ENCENDIDO and EDAD >= 18 else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=True, ENCENDIDO=True, EDAD=15.  GAS and ENCENDIDO and EDAD>=18', MENSAJE7)


GAS = True
ENCENDIDO = False
EDAD = 15

MENSAJE8 = 'El Vehículo está listo para emprender la marcha' if GAS or (
    ENCENDIDO and EDAD >= 18) else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=True, ENCENDIDO=True, EDAD=15.  GAS and (ENCENDIDO or EDAD>=18)', MENSAJE8)


GAS = False
ENCENDIDO = False
EDAD = 15

MENSAJE8 = 'El Vehículo está listo para emprender la marcha' if GAS or (
    ENCENDIDO and EDAD >= 18) else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=False, ENCENDIDO=True, EDAD=15.  not GAS and (ENCENDIDO or EDAD>=18)', MENSAJE8)

GAS = False
ENCENDIDO = False
EDAD = 15

MENSAJE9 = 'El Vehículo está listo para emprender la marcha' if not GAS or (
    ENCENDIDO and EDAD >= 18) else 'El Vehículo NO está preparado para emprender la marcha'

print('GAS=False, ENCENDIDO=True, EDAD=15.  not GAS and (ENCENDIDO or EDAD>=18)', MENSAJE9)

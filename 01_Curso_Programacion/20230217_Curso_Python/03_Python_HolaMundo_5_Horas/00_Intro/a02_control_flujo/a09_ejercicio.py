"""Ejercicio para practicar todo lo visto hasta elk momento"""

# Tenemos que hacer una Calculadora que compruebe si henmos introducido algún dato
# 1. Debe Pedir Número: N1
# 2. Debe Pedir Operación: OP
# 3. Debe Pedir Otro Número: N2
# 4. Debe Utilizar el Resultado como N1 para la siguiente Operación.
# 5. Debe Volver a Pedir la siguiente Operación.
# 6. Debe Volver a Pedir un Nuevo Número N2.
print("Bienvenido a la Calculadora")
print("Las Operaciones Disponibles son: suma, resta, multi, div")

N1 = 'None'


while (not N1.isdigit()):
    N1 = input("Por Favor Introduce un Número: ")
    if N1.lower() == 'salir':
        OP = 'salir'
        OP_AN = True
        break


if N1.isdigit():
    N1 = float(N1)
    OP_AN = False
    OP = ''

while OP_AN == False and OP.lower() != 'salir':
    OP = input("Por Favor, Introduce una Operación: ")
    if OP.lower() == 'suma' or OP.lower() == 'resta' or OP.lower() == 'multi' or OP.lower() == 'div':
        OP_AN = True

while True and OP.lower() != 'salir':
    N2 = 'None'
    while (not N2.isdigit()):
        N2 = input(
            "Por Favor Introduce otro Número para hacer la operación Solicitada: ")
        if N2.lower() == 'salir':
            OP = 'salir'
            break
    if N2.lower() == 'salir':
        OP = 'salir'
        break
    N2 = float(N2)
    if OP.lower() == 'suma':
        resultado = N1+N2
        signo = "+"
    elif OP.lower() == 'resta':
        resultado = N1-N2
        signo = "-"
    elif OP.lower() == 'multi':
        resultado = N1*N2
        signo = "*"
    elif OP.lower() == 'div':
        resultado = N1/N2
        signo = "/"

    print(
        f"El Ressultado de la Operación Solicitadaes: {N1} {signo} {N2} = {resultado}.")

    N1 = resultado

    OP_AN = False
    while OP_AN == False and OP.lower() != 'salir':
        OP = input("Por Favor, Introduce una Nueva Operación: ")
        if OP.lower() == 'suma' or OP.lower() == 'resta' or OP.lower() == 'multi' or OP.lower() == 'div':
            OP_AN = True

print('Gracias por Utilizar la Calculadora. Nos vemos pronto')

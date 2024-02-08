"""Seguimos Analizando 'while'"""

numero = int(input("Por Favor, Introduce un Número: "))

i = 0

while i <= numero:
    print(f"Este es el Número por el que vamos: {i}")
    print("\n")
    i += 1

print('Hemos Terminado')

print("\n")
i -= 1
while i <= numero*100:
    print(f"Este es el Número resultado de Multiplicar : {i}")
    print("\n")
    i *= 2


print('Hemos Terminado')
2

comando = ''

while comando.lower() != "salir":
    comando = input("Por Favor, introduce un comando: ")
    print('Este es el Comando Introducido Aplicando el Método "lower": ',
          comando.lower())
    print('\n')

print(f'Has Introducif el comando Correcto para "Salir": {comando}')

# Ahora Vamos a Ver los Loops Infinitos

comando = ''
while True:
    comando = input("Por Favor, Introduce un Comando: ")
    if comando.lower() == "salir":
        print(f"Has introducido el Comando Correcto: {comando}")
        break

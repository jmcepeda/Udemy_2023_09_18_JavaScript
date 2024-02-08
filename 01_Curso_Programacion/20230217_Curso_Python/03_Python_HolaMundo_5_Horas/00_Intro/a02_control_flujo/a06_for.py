"""Aprendiendo Bucle For"""


for numero in range(5):
    print(f'Numero {numero} de 4.', ' Hola - '*numero)

print('\n')
BUSCAR = int(input("Por Favor, Introduce el Número que Quieras Buscar: "))

for numero in range(5):
    print(f'\nNumero {numero} de 4.', ' Hola - '*numero)
    if numero == BUSCAR:
        print(f"\nAcabas de Encontrar el Número Buscado. NUMERO: {BUSCAR}.")
        break
        # Con break lo que consigo es parar el bucle, detener la ejecución de mi código para optimizar recursos
else:
    print(f"No hemos podido encontrar el Número Que Buscabas: {BUSCAR}")

# Son Intereables
# Listas
# Tuplas
# Rangos
# Strings


for char in 'Porra Gorda':
    print(char)

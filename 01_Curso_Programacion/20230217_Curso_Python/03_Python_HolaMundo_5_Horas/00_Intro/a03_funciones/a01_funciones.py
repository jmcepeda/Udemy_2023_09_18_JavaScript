"""Empezamos con el Estudio de las Fuciones"""
# Vamos a Explicar la Diferencia entre Parámetros y Argumentos
# En la Definición de la función, las variables que se le pasan son Parámetros
# Cuando Llamamos a la función, es necesario pasarle Argumentos.

# También Vamos a definir Parámetros Opcionales en la funciona hola4()


def hola():
    """Funcion"""
    print("Hola Mundo")
    print("Ultimate Python")
    print("Bienvenido Nicolás")


hola()


def hola2(nombre):
    """Nueva Función"""
    # Aquí, 'nombre es un 'parámetro'
    print("Hola Mundo")
    print("Ultimate Python")
    print(f"Bienvenido {nombre}")


hola2('Mariano')
# Aquí 'Chanchito Feliz' es un 'Argumento'
hola2('Chanchito Feliz')


def hola3(nombre, apellido):
    """Nueva Función"""
    # Aquí, 'nombre es un 'parámetro'
    print("Hola Mundo")
    print("Ultimate Python")
    print(f"Bienvenido {nombre} {apellido}")


hola3('Mariano', 'Díaz')
# Aquí 'Mariano' y 'Díaz' son 'Argumentos'


def hola4(nombre, apellido='Rodriguez'):
    """Nueva Función"""
    # Aquí, 'nombre es un 'parámetro'
    print("Hola Mundo")
    print("Ultimate Python")
    print(f"Bienvenido {nombre} {apellido}")


hola4('Antonio', 'García')
# Aquí 'Mariano' y 'Díaz' son 'Argumentos'
hola4('Manuel')

hola4(apellido='Vallellano', nombre='María')

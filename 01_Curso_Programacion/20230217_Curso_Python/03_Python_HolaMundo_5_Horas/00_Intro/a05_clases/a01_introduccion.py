"""Esta es una introducción a las clases en Python"""

MENSAJE = "Hola Mundo"

print(type(MENSAJE))

# Una Clase es algo así como un plano de Construcción
# En base al cual se van a poder crear objetos concretos
# Un objeto es una instancia de una clase,
# Es como una casa contruida en particular que se basa en un plano de construcción
# De un mismo plano se pueden construir muchas casas
# Eso mismo pasa con las clases, de esa clase pueden
# crearse muchos objetos concretos basadas/instanciadas en dicha clase
# Clases: el plano de construcción de una Clase
# Objeto: Serían las diferentes caasas construidas

# Hay una convención a la hora de asignar nombres a las clases
# UpperCase / PascalCase,
# Necesitamos poder identificar por el nombre si estamos hablando de una
# Clase, es por esto que se usa esta concención
# Ejemplos:
# class Pero
# class MiPerro


class Perro:
    """Esta es la primera Clase de Prueba"""
    # Las funciones dentro de una clase se llaman métodos.
    # En las Clases tenemos métodos no funciones
    # Además todas las funciones tendrán al menos el siguiente parámetro 'self', es siempre el primer parámetro

    def habla(self):
        """Primer Método de la Clase de Prueba"""
        print("Guau")


miperro = Perro()
print(f"Vamos a imprimir el tipo de esta variable: {miperro}")

miperro.habla()

# isinstance() Es una función que me permite conocer si un objeto es una instancia de una clase o no
print(isinstance(miperro, Perro))

print(isinstance(miperro, str))

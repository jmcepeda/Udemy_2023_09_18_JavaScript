"""Constructor. Seguimos aprendiendo sobre las clases"""


class Perro:
    """Esta es la primera Clase de Prueba"""
    # Las funciones dentro de una clase se llaman métodos.
    # En las Clases tenemos métodos no funciones
    # Además todas las funciones tendrán al menos el siguiente parámetro 'self', es siempre el primer parámetro

    def __init__(self, name, age):
        # __init__ es el metodo constructor de la clases Perro que se va
        # a ejecutar siempre que se instancie un nueva instancia de la clases PErro()
        """Self es una palabra reservada, se usa dentro de todas las clases dentro de todas las clases de Python de clase
        Self hace referencia a la instancia de la clase, no es un valor compartido
        self Se usa para referenciar las instancias de esta clases, self es un valor que va air cambiando en función de las instancias que vayamos creando"""
        # Vamos a asignar atribubtos a una instanacia de la clases Pero
        self.name = name
        self.age = age
        # print(nombre)

    def habla(self):
        """Primer Método de la Clase de Prueba"""
        # Podemos acceder a las atributo de un objeto desde una misma clase podemos hacerlo fácilmente utilizando self.
        print(
            f"Mi Perro: {self.name}, que tiene {self.age} años dice: ¡¡Guau!!")


miperro = Perro("Antonio", 35)
print(f"Vamos a imprimir el tipo de esta variable: {miperro}")

print(f"Este es el nombre de mi Perro1: {miperro.name}")

miperro2 = Perro("Alberto", 46)

print(f"Este es el nombre de mi Perro2: {miperro2.name}")

miperro3 = Perro("Roberto", 19)

print(f"Este es el nombre de mi Perro3: {miperro3.name}")

miperro.habla()
miperro2.habla()
miperro3.habla()

# Constructor es una función que podemos definir dentro de cada clase
# y se va a ejecutar siempre que creemos una nueva instancia de esa clase

"""Continuamos con la aplicación de los métodos de clase"""
# Es muy importante diferenciar entre los Métodos de las Instancias
# Hasta Ahora nosotros hemos visto los métodos de las instancias


class Perro:
    #    Aquí definimos los métodos de una clase. Hay que tener en cuenta que
    #    los métodos toman el mismo valor para todas las instancias de esta clase
    patas = 4

    # Los métodos de clase
    # Antes de la definición del método hay que escribir @classmethod

    @classmethod
    def ladra(cls):
        """Primer Método de clase"""
        # cls es una convención que hace referencia a la misma clase Perro, no a la instancia, cls hace referencia a la clase misma no a la instancia
        # Podemos acceder a las atributo de un objeto desde una misma clase podemos hacerlo fácilmente utilizando self.
        print(
            "Mi Perro: Ladra: ¡¡Guau!!")

    # Factory Method es un método de clase que lo que hace es crear una instnica de perro y la rertorna. Crea instancias de una clase y los devuelve

    @classmethod
    def factory(cls):
        """Este es un ejemplo de Factory Method que me crea instancias de la clase Perro clase"""
        # Con este método consigo crear de forma rápida instancias de una clase, pasándole por defecto algunos valores requeridos por el constructor de la clase
        # Los factory method también se pueden utilizar para acciones en común de todas las instancias de nuestras clases
        return cls("Chanchito Feliz: Generado con factory", 400)

    def __init__(self, name, age):
        """Self hace referencia a la instancia de la clase, no es un valor compartido
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


Perro.ladra()

miperro = Perro("Antonio", 33)

cira = Perro("Cira", 6)
maira = Perro("Maira", 4)

maira.ladra()

cira.ladra()

yako = Perro.factory()

yako.habla()

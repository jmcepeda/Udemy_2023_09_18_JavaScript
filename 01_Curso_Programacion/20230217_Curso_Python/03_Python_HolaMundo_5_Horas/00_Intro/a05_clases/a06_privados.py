
"""Continuamos con los privados de clase"""


class Perro:

    def __init__(self, name, age):
        # Para poder hacer una propiedad privada hay que añadir guión bajo antes y despues
        # Puedo acceder a estar propiedades privadadas desde la clase y los diferentes métodos de dicha clase
        self.__name = name
        self.age = age

    def getnombre(self):
        """Método de nombnre"""
        return self.__name

    def set_nombre(self, new_name):
        self.__name = new_name

    def habla(self):
        """Método Habla"""
        print(
            f"Mi Perro: {self.__name}, que tiene {self.age} años dice: ¡¡Guau!!")

    
    # También podemos hacer métodos privados
    # 20230612 Seguir Revisando Esto
     def __come(self):
        """Método Come"""
        print(
            f"Mi Perro: {self.__name}, que tiene {self.age} años Está Comiendo Mucho!!")

    @classmethod
    def factory(cls):
        return cls("Chanchito Feliz: Generado con factory", 400)

# En la mayor parte de los casos no nos interesa poder modificar las propiedades de las instancias de clase desde el código, fuera del constructor de la instancia. Es por esto que se definenen las propiedades privadas, propiedades que no se pueden modificar fuera del constructor de clase.


miperro = Perro("Antonio", 33)

cira = Perro("Cira", 6)
maira = Perro("Maira", 4)

yako = Perro.factory()

yako.habla()

yako.set_nombre("CambiadoNombreYako")

print(f"Este es el nombre cambiado de mi perro: {yako.getnombre()}")
yako.habla()

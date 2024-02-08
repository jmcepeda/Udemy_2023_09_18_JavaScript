"""Continuamos con la aplicación de lsa propiedades de una clases"""
# Es muy importante diferenciar entre las Propiedades de las Instancias
# Hasta Ahora nosotros hemos visto las propiedades de las instancias
# A las propiedades el compilador las llama Atributos, conceptualmente es lo mismo
# Pero en Python se las denomina de forma diferente
# La Diferencia entre Atributo y Propiedad es la siguiente:
#  - Propiedad de una clase, va a tomar el mismo valor para todas las instancias de dicha clase
#  - Atributo de una clase, va a tomar valores difeenrtes para cada una de las isntancias de dicha clase


class Perro:
    #    Aquí definimos las propiedades de una clase. Hay que tener en cuenta que
    #    las propiedades toman el mismo valor para todas las instancias de esta clase
    patas = 4

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


miperro = Perro("Antonio", 33)


print(
    f"Estamos imprimiendo una propiedad de la clase PErro(). La Propiedad es patas: {Perro.patas}")

print(
    f"Estamos imprimiendo una propiedad de una instancia de la clase Perro(), en concreto de 'miperro'. La Propiedad es patas: {miperro.patas}")

Perro.patas = 45

print(
    f"Estamos imprimiendo una propiedad de la clase PErro() modificada fuera de la clase. La Propiedad es patas: {Perro.patas}\n")

miperro.patas = 2

miperro2 = Perro("Manuel", 19)

print(
    f"Estamos imprimiendo una propiedad de una instancia de la clase Perro(), en concreto de 'miperro' modificada fuera de la clase desde la clase. La Propiedad es patas: {miperro.patas}. Puede verse que si modificio la propiedad de una instancia de la clase, en concreto 'miperro', no se modifica la propiedad de la clase ni del resto de instancias.\n")

print(
    f"Estamos imprimiendo una propiedad de una la clase Perro(), modificada fuera de la clase desde una instancia de la clase. La Propiedad es patas: {Perro.patas}\n")

print(
    f"Estamos imprimiendo una propiedad de una instancia de la clase Perro(), en concreto de 'miperro2' modificada fuera de la clase desde la clase. La Propiedad es patas: {miperro2.patas}. Puede verse que si modificio la propiedad de una instancia de la clase, en concreto miperro2, no se modifica la propiedad de la clase ni del resto de instancias.")

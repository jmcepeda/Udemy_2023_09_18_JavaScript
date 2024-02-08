"""Seguimos aprendiendo sobre las clases"""
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


# Constructor

"""Seguimos con los kwargs"""
# Vamos a Trabajar con los Key Words Arguments

# Para hacer Key Words en los Argumentos de una función usamos '**Parámetros'


def get_products(**datos):
    """Funcioón get Products"""
    print(datos)
    print(datos["id"],
          datos["producto"],
          datos["price"],
          datos["description"])


# Cuando usamos Key Word Arguments (**), en la Definción de la Función, cuando usamos la función
# Obligatoriamente debemos pasar el nombre del parámetro que queremos que sea asignado
# Podemos pasarle todos los argumentos que queramos
get_products(id=23,
             producto='Telefono',
             price=1000,
             description='Iphone 14 Pro Max')

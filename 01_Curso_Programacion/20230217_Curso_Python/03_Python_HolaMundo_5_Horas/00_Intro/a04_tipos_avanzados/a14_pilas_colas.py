"""Pilas y colas en Python"""
# Las Pilas tienen un compportameinto del Tipo LIFO
# Es decir, las Pilas funcionan Last IN First OUT
# Tienen un comportamiento diferente a las Filas
# Un buen Ejemplo de LIFO es el Historial de Navegación, dentro de una página web, migas de pan de una web

pila = []

pila.append(1)
pila.append(2)
pila.append(3)
pila.append(4)
pila.append(5)
pila.append(6)
pila.append(7)

print(f"Esta es la pila original: {pila}")

ultimoelemento = pila.pop()

print(
    f"Imprimimos elemento eliminado con el método pop(): {ultimoelemento} \n También Imprimos como queda la pila tras la emiminación del último elemento: {pila}")

# Para que una lista funcione como una pila solo podemos usar los métodos pop() y append()

# Para sacar el último elemento de una lista sin tener que saber el número de valores de la lista
# Puedo utilizar lista[-1]

print(f"Sacamos  el último Elemento de la Lista: {pila[-1]}")
pila2 = list(pila)
for i in pila2:
    pila.pop()
    if not pila:
        print(f"Pila Vacía: {pila}")
    else:
        print(f"Pila Con Datos: {pila}")

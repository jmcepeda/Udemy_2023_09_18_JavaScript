"""Metodos Listas"""

# Métodos para las Listas

# Method	Description
# append()	Adds an element at the end of the list
# clear()	Removes all the elements from the list
# copy()	Returns a copy of the list
# count()	Returns the number of elements with the specified value
# extend()	Add the elements of a list (or any iterable), to the end of the current list
# index()	Returns the index of the first element with the specified value
# insert()	Adds an element at the specified position
# pop()	Removes the element at the specified position
# remove()	Removes the first item with the specified value
# reverse()	Reverses the order of the list
# sort()

mascotas = ["Pelusa", "Pulga", "Chanchito Feliz", "Felipe", 'Copito']

# append()	Adds an element at the end of the list
mascotas.append('Perrito Feliz')

print(f'append(): Adds an element at the end of the list: {mascotas}')

# extend()	Add the elements of a list (or any iterable), to the end of the current list
mascotas.extend(['Chanchito Triste', 'Damelo Todo Papi', 'Por Ahí No Paso'])

print(
    f'extend(): Add the elements of a list (or any iterable), to the end of the current list: {mascotas}')

# index()	Returns the index of the first element with the specified value

index = mascotas.index('Damelo Todo Papi')

print(
    f'index(): Returns the index of the first element with the specified value: {index}')

# insert()	Adds an element at the specified position
mascotas.insert(2, 'Hightway To Hell')

print(
    f'insert():	Adds an element at the specified position: {mascotas}')

# pop()	Removes the element at the specified position
mascotas.pop()

print(
    f'pop(): Removes the element at the specified position: {mascotas}')

mascotas.pop(0)

print(
    f'pop(0): Removes the element at the specified position: {mascotas}')


# remove()	Removes the first item with the specified value

mascotas.remove('Copito')

print(
    f'remove(): Removes the first item with the specified value: {mascotas}')


# reverse()	Reverses the order of the list

mascotas.reverse()

print(
    f'reverse():	Reverses the order of the list: {mascotas}')

# sort() Sorts the list

mascotas.sort(reverse=True)

print(
    f'sort(reverse=True): Sorts the list: {mascotas}')

mascotas.sort()

print(
    f'sort(): Sorts the list: {mascotas}')


print(
    f'remove(): Remove a element: {mascotas}')

# clear()	Removes all the elements from the list
mascotas.clear()

print(f'clear():	Removes all the elements from the list {mascotas}')

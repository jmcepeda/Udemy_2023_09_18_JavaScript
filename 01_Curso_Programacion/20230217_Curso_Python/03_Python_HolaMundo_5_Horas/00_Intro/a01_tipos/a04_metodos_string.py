"""Seguimos con los Métodos de los Strings"""
# Un Método es una Función que se encuentra dentro de un objetio
# Por Ejemplo Las funciones que estan dentro de Strings, Son Métodos de los Strings como 'upper()'

ANIMAL = "  chanCHIto feliz   "
print("Sin Aplicar Metodos:", ANIMAL)
print("Aplicando 'upper':", ANIMAL.upper())
print("Aplicando 'lower':", ANIMAL.lower())
print("Aplicando 'capitalize':", ANIMAL.capitalize())
print("Aplicando Dos Métodos 'Strip' y 'Capitalize'", ANIMAL.strip().capitalize())
print("Aplicando 'title':", ANIMAL.title())
print("Aplicando 'strip", ANIMAL.strip())
print("Aplicando 'lstrip", ANIMAL.lstrip())
print("Aplicando 'rstrip", ANIMAL.rstrip())

print("Aplicamos 'find'", ANIMAL.find("ch"))
print("Aplicamos 'find'", ANIMAL.find("CH"))

print("Aplicamos 'find'", ANIMAL.find("FEL"))

print("Aplicamos 'replace'", ANIMAL.replace("CHI", "RRO"))

print("Aplicamos 'in'", "CH" in ANIMAL)

print("Aplicamos 'in'", "CHI" not in ANIMAL)

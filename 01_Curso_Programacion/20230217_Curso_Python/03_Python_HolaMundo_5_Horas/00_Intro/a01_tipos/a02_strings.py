""" Esto es una Introducción a Strings """

NOMBRE_CURSO = "Ultimate Python"

DECRIPCION_CURSO = """
Ultimate Python
Este curso contempla todo lo que
necesitas aprender para encontrar
un trabajo como programador
"""

print(NOMBRE_CURSO, DECRIPCION_CURSO)

LARGO_STR = str(len(NOMBRE_CURSO))
LARGO = len(NOMBRE_CURSO)
print(LARGO)
print(NOMBRE_CURSO)

print('[0]', NOMBRE_CURSO[0])

print('[0:5]', NOMBRE_CURSO[0:5])

print('[0:3]', NOMBRE_CURSO[0:3])

print('[3:6]', NOMBRE_CURSO[3:6])
print('[:6]', NOMBRE_CURSO[:6])
print('[0:]', NOMBRE_CURSO[0:])
print('[9:]', NOMBRE_CURSO[9:])
print('[:]', NOMBRE_CURSO[:])

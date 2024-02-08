"""Seguimos con los Números"""
NUMERO = 21  # integer Número Entero
DECIMAL = 1.2  # float
IMAGINARIO = 2+2j  # 2 + 2i

print(NUMERO)
NUMERO = NUMERO+2
print(f"NUMERO: {NUMERO} '+=2'", NUMERO)

NUMERO -= 2
print(f"NUMERO: {NUMERO} '-=2'", NUMERO)

NUMERO *= 2
print(f"NUMERO: {NUMERO} '*=2'", NUMERO)

NUMERO /= 2
print(f"NUMERO: {NUMERO} '/=2'", NUMERO)

NUMERO = NUMERO+24
print(f"NUMERO: {NUMERO} '+24", NUMERO)

NUMERO %= 2
print(f"NUMERO: {NUMERO} '%=2'", NUMERO)

NUMERO **= 2
print(f"NUMERO: {NUMERO} '**=2'", NUMERO)

NUMERO //= 0.5
print(f"NUMERO: {NUMERO}'//=0.5'", NUMERO)


print("1+3: ", 1+3)
print("1-3: ", 1-3)
print("1*3: ", 1*3)
print("1/3: ", 1/3)
print("Solo Parte Entera de 4/3: ", 4//3)
print("Resto de 8/3: ", 8 % 3)
print("2^3: ", 2**3)

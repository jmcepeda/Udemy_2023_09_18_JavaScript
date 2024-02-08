# mensaje='Hola Perrra Judía'
# print(mensaje)
# print('Hola Mundo')

import random

opciones=('piedra', 'papel', 'tijeras')

eleccionValida=False    



round=1
ganadasUser=0
ganadasPC=0



while ganadasUser<2 and ganadasPC<2:
    while eleccionValida==False:
        selecUser=input('Introduce el Valor que Quieras: "Piedra", "Papel" o "Tijeras": ')
        selecUserLower=selecUser.lower()
        # print('SelecUSer' , selecUser)
        # print('Este es el resultado de la comprobación del valor introducido por el usuario: "selecUserLower in opciones": ', selecUserLower in opciones)
        if selecUserLower in opciones:
            eleccionValida=True
        else:
            print(f'El Valor Introducido: "{selecUser}". NO es una Opción Válida')
    
    print('SelecUSer pasado a Minúsculas' , selecUserLower)

    selectPC=random.choice(opciones)
    print(f'La Elección del Usuario es: {selecUserLower} y la Elección del PC es: {selectPC}.')

    print('*'*10)
    print(f'***ROUND*** {round}')
    print('*'*10)
    if selectPC==selecUserLower:
        print(f'Empate. Los dos habeis elegido: {selectPC}')
    else:
        if selecUserLower=='piedra':
            if selectPC=='papel':
                print('Papel gana a Piedra')
                print('Computadora gana a Usuario')
                ganadasPC=+1
            else:
                print('Piedra gana a Tijera')
                print('Usuario gana a Computadora')
                ganadasUser=+1
        elif selecUserLower=='papel':
            if selectPC=='piedra':
                print('Papel gana a Piedra')
                print('Usuario gana a Computadora')
                ganadasUser=+1
            else:
                print('Tijera gana a Papel')
                print('Computadora gana a Usuario')
                ganadasPC=+1
        else:
            if selectPC=='piedra':
                print('Piedra gana a Tijera')
                print('Computadora gana a Usuario')
                ganadasPC=+1
            else:
                print('Tijera gana a Papel')
                print('Usuario gana a Computadora')
                ganadasUser=+1
    eleccionValida=False
    print(f'Las Partidas Ganadas por el PC son:      {ganadasPC} Partidas')
    print(f'Las Partidas Ganadas por el Usuario son: {ganadasUser} Partidas')
    round=+1



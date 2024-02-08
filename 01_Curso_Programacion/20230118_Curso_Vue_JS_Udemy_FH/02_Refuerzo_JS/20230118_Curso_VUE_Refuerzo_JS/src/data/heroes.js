

const owners=['DC','Marvel']

console.log('Perro Judío Antes de la Exportación')


export const owners2=['DC2','Marvel2']

const heroes =[
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


const Rabo_Heroes = [
    {
        id: 7,
        name: 'Rabo_Batman',
        owner: 'DC'
    },
    {
        id: 8,
        name: 'Rabo_Spiderman',
        owner: 'Marvel'
    },
    {
        id: 9,
        name: 'Rabo_Superman',
        owner: 'DC'
    },
    {
        id: 10,
        name: 'Rabo_Flash',
        owner: 'DC'
    },
    {
        id: 11,
        name: 'Rabo_Wolverine',
        owner: 'Marvel'
    },
];

// Para Exportar, puedoi exportar todo lo que necesite, solo debo meter entre corchetes todo lo que necesite exportar. {A, B, C}

export  {owners, Rabo_Heroes, heroes};

export const owners_Toto=['DC_Toto','Marvel_Toto']

const heroes_Toto =[
    {
        id: 7,
        name: 'Toto_Batman',
        owner: 'DC_Toto'
    },
    {
        id: 8,
        name: 'Toto_Spiderman',
        owner: 'Marvel_Toto'
    },
    {
        id: 9,
        name: 'Toto_Superman',
        owner: 'DC_Toto'
    },
    {
        id: 10,
        name: 'Toto_Flash',
        owner: 'DC_Toto'
    },
    {
        id: 11,
        name: 'Toto_Wolverine',
        owner: 'Marvel_Toto'
    },
];

console.log('Perro Judío Despues de la Exportación')

export default heroes_Toto

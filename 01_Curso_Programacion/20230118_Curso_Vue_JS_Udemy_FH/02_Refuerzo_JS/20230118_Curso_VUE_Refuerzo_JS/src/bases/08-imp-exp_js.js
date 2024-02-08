//20230122 Novena Clase de Refuerzo JS 
//Exportaciones e Importaciones 
// Las Impoprtaciones por defecto se hacen sin corchetes.
// Para el resto de Exportaciones debe usarse corchetes y meter dentro de los corchetes todo lo que necesitemos importarnos {A, B, C}

import heroes_Toto, {owners2, owners_Toto,Rabo_Heroes, owners} from '../data/heroes'


//Es importante tener presente que cuando importamos algo de un archivo".js", dicho archivo se ejecuta, por lo que si hay muchas rutinas y es un proceso pesado peude relentizar el tiempo de respuesta y mi aplicación

console.log(owners2)

const [dc2, marvel2]=owners2

console.log(dc2)
console.log( marvel2)


// import {Rabo_Heroes, owners} from './data/heroes'

console.log(Rabo_Heroes)
console.log(owners)

console.log(heroes_Toto)


export const getHeroById = (Id) => {
  // return heroes_Toto.find(heroe_f => heroe_f.id===Id)
  return heroes_Toto.find(heroooe => heroooe.id===Id)
  
}

console.log(getHeroById(8))

export const getHeroByOwner = (owner) => {
  // return heroes_Toto.find(heroe_f => heroe_f.id===Id)
  return heroes_Toto.filter(heroooe => heroooe.owner===owner)
  
}

console.log(getHeroByOwner('Marvel_Toto'))


const getHeroByOwner2 = (owner) => (heroes_Toto.filter(heroooe => heroooe.owner===owner))
  
console.log(getHeroByOwner2('DC_Toto'))


const getHeroByOwner3 = (owner) => heroes_Toto.filter(heroooe => heroooe.owner===owner)

console.log(getHeroByOwner3('DC_Toto'))


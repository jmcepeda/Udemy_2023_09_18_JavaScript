
import Bomboncito, {arbolito} from './Bomboncito';// En los Módulos en los que se Exporta por Defecto, default, es necesario importar de esta forma, sin corchetes

import {rabito} from "./Bomboncito"

import { Point,PUNTITO } from "./Point"

import { Group } from "./Group"

let point1 = new Point(23, 45)

console.log("Imprimiendo Valores de Puntito. x: ", PUNTITO.x, " y:  ", PUNTITO.y )


let group = new Group(1,"SuperGrupo")

let bomboncito = new Bomboncito(3, "Alberto Malo")

console.log("Impriendo por consola, objeto importado desde un módulo, que tiene exportación por defecto: " , rabito)

console.log("Impriendo por consola, objeto importado desde un módulo, que tiene exportación por defecto: " , arbolito)

console.log("Impriendo por consola, objeto importado desde un módulo, que tiene exportación por defecto: " , bomboncito.name)


// Ahora vamos a ver los WildCard, que nos permiten importar todo los elementos de un módulo de una sola tacada.
// Esta posiblemente no es la mejor opción, pues pierdes parte del control de lo que se importa
// Es una buena practica importar elemento a elemento para tener un control de que elementos tengo disponibles

import * as Tremendo from "./Tremendo"

const tremendo = new Tremendo.default(56,"Esto es Tremendo")

console.log("Imprimiendo de una WildCard Import: ", Tremendo.arquimides.des)
console.log("Imprimiendo propiedad de una instancia de una clase importada con una WildCard Import: ", tremendo.name)

// Vamos a importar las Diferentes Clases del Modulo Animales

import { Objeto } from "./Animales/Objeto";
import { Caballo } from "./Animales/Caballo";
import { Animal } from "./Animales/Animal";

console.log(Animal.name,Caballo.name, Objeto.name)





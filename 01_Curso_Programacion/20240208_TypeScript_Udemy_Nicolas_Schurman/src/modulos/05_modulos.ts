
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

console.log("Impriendo por consola, objeto importado desde un módulo, que tiene exportación por defecto: " , bomboncito)





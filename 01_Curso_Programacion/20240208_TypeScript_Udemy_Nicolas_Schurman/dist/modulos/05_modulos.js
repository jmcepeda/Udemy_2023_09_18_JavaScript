"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bomboncito_1 = __importStar(require("./Bomboncito"));
const Bomboncito_2 = require("./Bomboncito");
const Point_1 = require("./Point");
const Group_1 = require("./Group");
let point1 = new Point_1.Point(23, 45);
console.log("Imprimiendo Valores de Puntito. x: ", Point_1.PUNTITO.x, " y:  ", Point_1.PUNTITO.y);
let group = new Group_1.Group(1, "SuperGrupo");
let bomboncito = new Bomboncito_1.default(3, "Alberto Malo");
console.log("Impriendo por consola, objeto importado desde un módulo, que tiene exportación por defecto: ", Bomboncito_2.rabito);
console.log("Impriendo por consola, objeto importado desde un módulo, que tiene exportación por defecto: ", Bomboncito_1.arbolito);
console.log("Impriendo por consola, objeto importado desde un módulo, que tiene exportación por defecto: ", bomboncito.name);
const Tremendo = __importStar(require("./Tremendo"));
const tremendo = new Tremendo.default(56, "Esto es Tremendo");
console.log("Imprimiendo de una WildCard Import: ", Tremendo.arquimides.des);
console.log("Imprimiendo propiedad de una instancia de una clase importada con una WildCard Import: ", tremendo.name);
const Objeto_1 = require("./Animales/Objeto");
const Caballo_1 = require("./Animales/Caballo");
const Animal_1 = require("./Animales/Animal");
console.log(Animal_1.Animal.name, Caballo_1.Caballo.name, Objeto_1.Objeto.name);
//# sourceMappingURL=05_modulos.js.map
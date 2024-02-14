"use strict";
let mensaje = "Hola Mundo";
mensaje = "Chanchito Feliz";
console.log(mensaje);
mensaje = "Chao Mundo";
console.log(mensaje);
mensaje = "Hola Mundo Feliz";
console.log(mensaje);
let extincionDinosaurio = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
console.log(extincionDinosaurio);
console.log(dinosaurioFavorito);
console.log(extintos);
const chanchitoFeliz = () => {
    console.log("Super Chanchito Feliz Function");
};
chanchitoFeliz();
let animales = ["Pera", "Manzana", "Melon"];
let numbs = [1, 2, 4, 67, 34];
let checks = [true, false, true];
let numbs2 = [34, 56, 89, 33];
const dobleArray = (arrayNum) => {
    let newArrNum = arrayNum.map(x => x * 2);
    console.log(newArrNum);
};
dobleArray(numbs);
let tupla = [1, "chanchito", 3, ["Alberto", "Manuel", "Jose"]];
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
var Talla;
(function (Talla) {
    Talla[Talla["Chica"] = 0] = "Chica";
    Talla[Talla["Mediana"] = 1] = "Mediana";
    Talla[Talla["Grande"] = 2] = "Grande";
    Talla[Talla["ExtraGrande"] = 3] = "ExtraGrande";
})(Talla || (Talla = {}));
var Talla2;
(function (Talla2) {
    Talla2[Talla2["Chica"] = 3] = "Chica";
    Talla2[Talla2["Mediana"] = 4] = "Mediana";
    Talla2[Talla2["Grande"] = 5] = "Grande";
    Talla2[Talla2["ExtraGrande"] = 6] = "ExtraGrande";
})(Talla2 || (Talla2 = {}));
var Talla3;
(function (Talla3) {
    Talla3["Chica"] = "s";
    Talla3["Mediana"] = "m";
    Talla3["Grande"] = "l";
    Talla3["ExtraGrande"] = "xl";
})(Talla3 || (Talla3 = {}));
let s = "s";
let m = "m";
let l = "l";
let xl = "xl";
let msg = `Rabo de toro ${mediana}`;
const objeto = { id: 1, nombre: "Chanchito Feliz" };
objeto.nombre = "Hola Mundo";
const objeto2 = {
    id: 1,
    nombre: "Chanchito Feliz"
};
const objeto3 = {
    id: 1,
    nombre: "Jose"
};
const objeto4 = {
    id: 2
};
objeto4.nombre = "Alberto";
const objeto5 = {
    id: 2
};
const objeto6 = {
    id: 2,
    nombre: "Gabriel",
    talla: "s"
};
const objeto7 = {
    id: 2,
    nombre: "Gabriel",
    talla: "s"
};
const objeto8 = {
    id: 2,
    nombre: "Gabriel",
    talla: "s",
    direccion: {
        municipio: "Santiponce",
        calle: "Antonio Machado",
        numero: 10
    }
};
console.log(`Esta es la dirección de mi Vivienda: c/${objeto8.direccion.calle} num: ${objeto8.direccion.numero}, ${objeto8.direccion.municipio}`);
const objeto9 = {
    id: 2,
    nombre: "Gabriel",
    talla: "s",
    direccion: {
        municipio: "Sevilla",
        calle: "Honderos",
        numero: 3
    }
};
console.log(`Esta es la dirección de mi Vivienda: c/${objeto9.direccion.calle} num: ${objeto9.direccion.numero}, ${objeto9.direccion.municipio}`);
const listPers = [];
console.log(`Esta es la Talla Obtenida del Objeto con Tipo de Dato Talla (Enum): ${objeto6.talla}`);
const acceso = (edad, msg = "Duro") => {
    if (edad >= 18)
        return `Rabo de Toro ${msg}`;
    else
        return `Toma del frasco Carrasco`;
};
console.log(acceso(15, "Duro"));
//# sourceMappingURL=index.js.map
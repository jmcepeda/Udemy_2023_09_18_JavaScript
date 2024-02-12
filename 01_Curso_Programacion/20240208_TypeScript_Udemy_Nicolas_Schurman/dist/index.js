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
//# sourceMappingURL=index.js.map
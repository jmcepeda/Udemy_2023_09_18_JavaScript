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
function otra(input) {
    if (input == "Hola")
        return true;
    else
        return false;
}
console.log(`Primera Prueba Funcion definida como function: ${otra("Hola")}`);
console.log(`Segunda Prueba Funcion definida como function: ${otra("Rabo")}`);
function ErrorUsuario() {
    throw new Error("Error de Usuario");
}
let puntaje = 98;
puntaje = "Hola Mundo";
let animal = { id: 1, estado: "Vivo" };
let animal2 = { id: 1, estado: "Vivo", name: "Jose" };
console.log(`Imprimiendo por Pantalla el Objeto Animal: ${animal.estado}`);
function suma2(n) {
    if (typeof (n) === "number") {
        return n + 2;
    }
    else {
        if (Number.isNaN(parseInt(n))) {
            return 33 + 2;
        }
        else {
            return parseInt(n) + 2;
        }
    }
}
console.log(`Estamos escribiendo resultado de funcrion suma2(): ${suma2("Porra")}`);
console.log(`Estamos escribiendo resultado de funcrion suma2(): ${suma2(5)}`);
let chanchito = "feliz";
const product = {
    created_at: "",
    modified_at: "",
    name: ""
};
const nDeFibo = 3;
function toNumber(s) {
    if (s) {
        return parseInt(s);
    }
    else {
        return 0;
    }
}
const n = toNumber(null);
const n2 = toNumber(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    else {
        return {
            id: id,
            name: "Felipe",
            create_at: new Date()
        };
    }
}
const userJose = getUser(-1);
console.log('Usuario: ', userJose === null || userJose === void 0 ? void 0 : userJose.create_at);
if (userJose && (userJose === null || userJose === void 0 ? void 0 : userJose.create_at)) {
    console.log('Usuario: ', userJose === null || userJose === void 0 ? void 0 : userJose.create_at);
}
else {
    console.log('Usuario: No Existe ');
}
const arr1 = null;
console.log(arr1 === null || arr1 === void 0 ? void 0 : arr1[0]);
const fn5 = null;
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
const Rabito = () => {
    console.log("Rabito Bien Duro de la Function fn()");
};
function cb(fn) {
    if (fn) {
        fn();
    }
}
cb(Rabito);
const difficulty = null;
const difficulty2 = 0;
const user2 = {
    username: "chanchito feliz",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1
};
const user3 = {
    username: "Chanchito Feliz Perreador",
    difficulty: difficulty2 !== null && difficulty2 !== void 0 ? difficulty2 : 1
};
console.log("Difficulty: ", user2.difficulty);
console.log(user2);
console.log(user3);
const elem2 = null;
const elem3 = elem2;
function lala(x) {
    if (typeof (x) === "number") {
        return x.toString();
    }
    if (typeof (x) === "string") {
        return x.endsWith("s");
    }
    return "Usa un tipo de Dato Valido para la function lala()";
}
console.log("Function lala() con un number: ", lala(33));
console.log("Function lala() con un string: ", lala("Rabito duro"));
function procesa(algo) {
    if (typeof algo === "string") {
        return algo.toUpperCase();
    }
    if (typeof algo === "number") {
        return algo.toString();
    }
    return "Introduce un tipo de dato correcto";
}
console.log("Resultado de la funcion procesa(): ", procesa("Amapola"));
console.log("Resultado de la funcion procesa(): ", procesa(44));
class Personaje {
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this.hp = this.hp + cantidad;
        return this.hp;
    }
}
const personaje = new Personaje(1, "Alberto", 1, 100);
console.log("Personaje Antes de Actualizar HP: ", personaje);
personaje.cambiarHP(-10);
console.log("Personaje Después de Actualizar HP: ", personaje);
if (true) {
    console.log("Esto me devuelve que es un objeto. No me sirve de gran cosa: ", (typeof personaje));
}
if (personaje instanceof Personaje) {
    console.log("Ok. Con instanceof podemos confirmar si una instancia corresponde a una Clase en Particular: ", personaje instanceof Personaje);
}
//# sourceMappingURL=index.js.map
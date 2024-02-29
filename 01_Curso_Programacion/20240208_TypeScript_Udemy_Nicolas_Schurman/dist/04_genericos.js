"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(a, b) {
    console.log(a, b);
}
function logN(a, b) {
    console.log(a, b);
}
function logT(a, b) {
    console.log(a, b);
}
log("dato", "Chanchito Feliz");
function GenLog0(a, b) {
    console.log(a, b);
    return b;
}
GenLog0("Hola", true);
GenLog0("Hola", { "id": 23, "name": "Ildefonso" });
GenLog0("Hola", 55);
function GenLog(a, b) {
    console.log(a, b);
    return a;
}
GenLog("Hola", "Diga 33");
GenLog("Hola", 456);
GenLog("Hola", false);
GenLog(true, false);
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData("/usuarios");
        console.log(user.id);
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
console.log(programador.computador.apagar);
const programador1 = new Programador("Toma Mi Rabito");
console.log(programador1.computador);
function fetchProduct() {
    return {
        key: "id de Producto",
        value: { id: "id de Producto" }
    };
}
function fetchStock() {
    return {
        key: "id de Producto",
        value: 500
    };
}
console.log("Salida de Function fetchProduct(): ", fetchProduct());
console.log("Salida de Function fetchStock(): ", fetchStock());
function printJ(t) {
    console.log(t);
    return t;
}
console.log("Imprimiendo por consola el resultado de la función printJ: ", printJ(42));
console.log("Imprimiendo por consola el resultado de la función printJ: ", printJ("Rabito bien Durito"));
function printJ2(t) {
    console.log(t);
    return t;
}
console.log("Imprimiendo por consola el resultado de la función printJ2: ", printJ2(true));
console.log("Imprimiendo por consola el resultado de la función printJ2: ", printJ2(false));
function printJ3(t) {
    console.log(t.name);
    console.log(t.id);
    return t;
}
console.log("Imprimiendo por consola el resultado de la función printJ3: ", printJ3({ id: "Rabito", name: "Rabito" }));
console.log("Imprimiendo por consola el resultado de la función printJ3: ", printJ3({ id: "Tronquito", name: "Durito" }));
class Usuario4 {
    constructor(id) {
        this.id = id;
    }
}
function printJ4(t) {
    console.log(t.id);
    return t;
}
console.log("Imprimiendo por consola el resultado de la función printJ3: ", printJ4({ id: "Rabito", name: "Rabito" }));
console.log("Imprimiendo por consola el resultado de la función printJ3: ", printJ4({ id: "Tronquito", name: "Durito" }));
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
const estadoUsuarios = new Estado;
console.log("Imprimiendo Estado Usuario", estadoUsuarios.getEstado());
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuario extends Estado {
    resetPassword() {
    }
}
const estadoUsuarios2 = new EstadoUsuario();
const calendar = {
    id: 1,
    fuente: "Google",
    dueno: "yo"
};
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, "id");
getProp(calendar, "fuente");
const keyval = {
    "Soy un string": 42
};
const p = {
    x: 1
};
const readOnlyP = {
    x: 1,
    y: 2,
    desc: "Hola Mundo"
};
//# sourceMappingURL=04_genericos.js.map
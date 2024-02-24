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
//# sourceMappingURL=04_genericos.js.map
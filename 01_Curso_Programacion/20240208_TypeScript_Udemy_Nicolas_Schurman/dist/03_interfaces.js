"use strict";
class Animalito {
    constructor(raza) {
        this.raza = raza;
    }
}
class Caballo extends Animalito {
    constructor() {
        super(...arguments);
        this.name = "Caballus Hectereus";
    }
    onomatopeya() {
        return "Eiiiii";
    }
    caminar() {
        return "Cabalgando";
    }
}
class Cerdo extends Animalito {
    constructor() {
        super(...arguments);
        this.name = "Chanchirius Felicius";
    }
    onomatopeya() {
        return "Oing";
    }
    caminar() {
        return "Rebolcandose en Barro";
    }
}
console.log();
class Caballo2 {
    constructor() {
        this.name = "Caballus Hectereus";
    }
    onomatopeya() {
        return "Eiiiii";
    }
    caminar() {
        return "Cabalgando";
    }
}
class Cerdo2 {
    constructor() {
        this.name = "Chanchirius Felicius";
    }
    onomatopeya() {
        return "Oing";
    }
    caminar() {
        return "Rebolcandose en Barro";
    }
}
class Perro2 {
    constructor() {
        this.name = "Canis";
    }
    onomatopeya() {
        return "Auff";
    }
    caminar() {
        return "Perro Corriendo";
    }
}
let objetoReferencia = {
    'id1': {},
    'id2': {},
    'id99999': {}
};
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios;
diccionarioUsuarios.a1 = "usuario1";
diccionarioUsuarios["1a"] = "usuario2";
console.log("Diccionario de Usuarios con Identificadores en Tiempo Dinámico: ", diccionarioUsuarios);
//# sourceMappingURL=03_interfaces.js.map
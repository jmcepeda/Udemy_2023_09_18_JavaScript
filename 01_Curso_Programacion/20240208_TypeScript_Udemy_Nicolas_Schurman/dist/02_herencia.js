"use strict";
console.log("Rabito de Prueba");
class DatosBasicos {
    constructor(name, description, alegoria, created_at, created_by) {
        this.name = name;
        this.description = description;
        this.alegoria = alegoria;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return this.name + " - " + this.description;
    }
    get Alegoria() {
        return "Alegoria: " + this.alegoria;
    }
}
class Producto extends DatosBasicos {
    constructor(stock, sku, name, description, alegoria, created_at, created_by) {
        super(name, description, alegoria, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return "Producto: " + super.fullDesc;
    }
    get Alegoria() {
        return "Ampliación de la Alegoría con Método Override: " + super.Alegoria;
    }
    guardar() {
        return "'Guardando Producto.....'";
    }
}
class Categoria extends DatosBasicos {
    constructor(name, description, alegoria, created_at, created_by) {
        super(name, description, alegoria, created_at, created_by);
        this.productos = [];
    }
    agregaProducto(producto) {
        this.productos.push(producto);
    }
    get fullDesc() {
        return "Categoría: " + super.fullDesc;
    }
    guardar() {
        return "Guardando Categoría";
    }
}
const producto1 = new Producto(5, 334567834, "Iphone", "Es un Iphone 14 Pro Max", "Canto al Sol", new Date(), 1);
const categoria1 = new Categoria("Telefonos", "Todos los Teléfonos de la tienda", "Canto a la Lluvia", new Date(), 1);
categoria1.agregaProducto(producto1);
console.log("Este es el Primer Producto Creado: ", producto1);
console.log("Este es la Primera Categoría Creado: ", categoria1);
console.log("Esta es una Descripcion Ampliada con el método override de una clase Heredada: " + producto1.fullDesc);
console.log("Esta es una Extensión del Método Alegoría con el método override de una clase Heredada: " + producto1.Alegoria);
console.log("Ejecutando Método Abstracto en Clase Heredada: ", producto1.guardar());
//# sourceMappingURL=02_herencia.js.map
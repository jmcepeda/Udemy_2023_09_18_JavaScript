"use strict";
console.log("Rabito de Prueba");
class DatosBasicos {
    constructor(name, description, created_at, created_by) {
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
}
class Producto extends DatosBasicos {
    constructor(stock, sku, name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
}
class Categoria extends DatosBasicos {
    constructor(name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        this.productos = [];
    }
    agregaProducto(producto) {
        this.productos.push(producto);
    }
}
const producto1 = new Producto(5, 334567834, "Iphone", "Es un Iphone 14 Pro Max", new Date(), 1);
const categoria1 = new Categoria("Telefonos", "Todos los Teléfonos de la tienda", new Date(), 1);
categoria1.agregaProducto(producto1);
console.log("Este es el Primer Producto Creado: ", producto1);
console.log("Este es la Primera Categoría Creado: ", categoria1);
//# sourceMappingURL=herencia.js.map
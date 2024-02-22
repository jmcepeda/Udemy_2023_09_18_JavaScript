console.log("Rabito de Prueba")
// Producto
// // Propiedades
// name
// desc
// created_at
// createrd_by

class DatosBasicos  {
    
    constructor(
        public name: string,
        public description: string,
        public created_at: Date,
        public created_by: number
    )
    {}
    get fullYear() {
        return this.created_at.getFullYear()
    }
}

class Producto extends DatosBasicos {
    
    constructor (
        public stock: number,
        public sku: number,
        name: string,
        description: string, 
        created_at: Date, 
        created_by: number ) {
        super(name, description, created_at, created_by)
    }
}

class Categoria extends DatosBasicos {
    public productos: Producto[]=[]
    constructor (
        name:string, 
        description:string, 
        created_at: Date, 
        created_by: number){
        super(name, description,created_at,created_by)
    }

    agregaProducto(producto: Producto){
        this.productos.push(producto)
    }

}

const producto1= new Producto(5,334567834,"Iphone", "Es un Iphone 14 Pro Max", new Date(), 1)

const categoria1 = new Categoria("Telefonos","Todos los Teléfonos de la tienda", new Date(),1)

categoria1.agregaProducto(producto1);

console.log("Este es el Primer Producto Creado: ", producto1)
console.log("Este es la Primera Categoría Creado: ", categoria1)
console.log("Rabito de Prueba")
// Producto
// // Propiedades
// name
// desc
// created_at
// createrd_by

abstract class DatosBasicos  { // Poniendo delante abstract establezco esta clase DatosBasico como una Clase Abstracta para la que no podremos crear Instancias.
    
    constructor(
        public name: string,
        public description: string,
        private alegoria: string,       //La Diferencia Entre una propiedad private y una protected es la siguiente:
        protected created_at: Date,     // La Propiedad private, solo es accesible desde la clase Primogenia. No puede accederse desde fuera de la clase, tampoco desde las clases Heredadas
        protected created_by: number    // La Propiedad protected, es accesible desde la clase y desde las Clases Heredadas. No puede accederse desde fuera de la clase (Ni Proomogenia ni Heredadas)
                                        // En conclusión para poder acceder a las propiedades privadas de una clase desde una clase hererada, hay que hacer dichas propiedades protected.
    )
    {}
    get fullYear() {
        return this.created_at.getFullYear()
    }
    get fullDesc() {
        return this.name + " - " + this.description
    }

     get Alegoria() {
        return "Alegoria: " + this.alegoria
    }

    abstract guardar(): void // Los Métodos Abstractos no tienen ninguna Implementación
                             // La idea es que todas las Clases Heredadas Tendrán que Implementar este método
                             // Pero no puede Implementarse nada de este método abstracto en la Clase Priomogenia 

    // Podemos Crear Métodos Abstractos.
    // Esto Implica que todas las Clases Heredadas de esta tendrás que Implementar este método Obligatoriamente. 
}

class Producto extends DatosBasicos {
    
    constructor (
        public stock: number,
        public sku: number,
        name: string,
        description: string, 
        alegoria: string,
        created_at: Date, 
        created_by: number ) {
        super(name, description, alegoria, created_at, created_by)
    }

    override get fullDesc(): string {
        return "Producto: " + super.fullDesc 
    }

    override get Alegoria(): string {
        return  "Ampliación de la Alegoría con Método Override: " + super.Alegoria
    }

    guardar(): string {
        return "'Guardando Producto.....'"
    }
}

class Categoria extends DatosBasicos {
    public productos: Producto[]=[]
    constructor (
        name:string, 
        description:string, 
        alegoria: string,
        created_at: Date, 
        created_by: number){
        super(name, description, alegoria, created_at,created_by)
    }

    agregaProducto(producto: Producto){
        this.productos.push(producto)
    }

    override get fullDesc(): string {
        return "Categoría: " + super.fullDesc 
    }

    guardar(): string {
        return "Guardando Categoría"
    }

}

const producto1= new Producto(5,334567834,"Iphone", "Es un Iphone 14 Pro Max", "Canto al Sol" ,new Date(), 1)

const categoria1 = new Categoria("Telefonos","Todos los Teléfonos de la tienda", "Canto a la Lluvia",new Date(),1)

categoria1.agregaProducto(producto1);

console.log("Este es el Primer Producto Creado: ", producto1)
console.log("Este es la Primera Categoría Creado: ", categoria1)

console.log("Esta es una Descripcion Ampliada con el método override de una clase Heredada: " + producto1.fullDesc)

console.log("Esta es una Extensión del Método Alegoría con el método override de una clase Heredada: " + producto1.Alegoria)

// Lo siguiente son las clases y métodos abstractos

// Se que nunca deberíamos poder Crear una Instancia de DatosBasicos, pero la realidad es que tal y como la hemos definido, si que podemos crear instancias de la Clase DatosBasicos.

//  class DatosBasicos {

//let datos1 = new DatosBasicos("Rabito", "Instancia de DatosBasico","Cantando Bajo la Luvia", new Date(),3)

//console.log(datos1)

// La idea es que vamos a Impedir que se puedan crear Instancias de Clases Abstractas, Clases que sabemos de antemano que no podrán tener Instancias.

console.log("Ejecutando Método Abstracto en Clase Heredada: ", producto1.guardar())
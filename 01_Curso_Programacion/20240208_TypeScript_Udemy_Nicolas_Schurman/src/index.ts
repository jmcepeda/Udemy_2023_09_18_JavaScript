let mensaje: string = "Hola Mundo"
mensaje="Chanchito Feliz"

console.log(mensaje)

mensaje="Chao Mundo"

console.log(mensaje)

mensaje="Hola Mundo Feliz"

console.log(mensaje)

let extincionDinosaurio=76_000_000
let dinosaurioFavorito="T-Rex"
let extintos=true

console.log(extincionDinosaurio)
console.log(dinosaurioFavorito)
console.log(extintos)


const chanchitoFeliz = () => {
    console.log("Super Chanchito Feliz Function")
}

chanchitoFeliz()

let animales: string[]=["Pera", "Manzana", "Melon"]
let numbs: number[]=[1,2,4,67,34]
let checks: boolean[]=[true, false,true]
let numbs2: Array<number>=[34,56,89,33]

const dobleArray=(arrayNum: number[]) => {
    let newArrNum=arrayNum.map(x=> x*2)
    console.log(newArrNum)
}

dobleArray(numbs)

// Vamos a hacer tuplas

let tupla: [number, string, number, string[]]=[1, "chanchito",3, ["Alberto", "Manuel", "Jose"]]

// Ahora nos ponemos con las Enumeraciones enums

const chica="s"
const mediana="m"
const grande="l"
const extragrande="xl"

// PascalCase
enum Talla {Chica, Mediana, Grande, ExtraGrande}

enum Talla2 {Chica=3, Mediana, Grande, ExtraGrande}

enum Talla3 {Chica=chica, Mediana=mediana, Grande=grande, ExtraGrande=extragrande}

const enum Talla4 {Chica=chica, Mediana=mediana, Grande=grande, ExtraGrande=extragrande}

let s=Talla4.Chica
let m=Talla4.Mediana
let l=Talla4.Grande
let xl=Talla4.ExtraGrande

let msg: string = `Rabo de toro ${mediana}`

const objeto={id: 1, nombre: "Chanchito Feliz"}


objeto.nombre="Hola Mundo"

const objeto2: {
    id: number,
    nombre: string
} ={
    id: 1, 
    nombre: "Chanchito Feliz"
}

const objeto3: {
    id: number,
    nombre?: string     //Con esto lo que hacemos es que este campo no es Obligatorio
} ={
    id: 1,
    nombre: "Jose"
}
const objeto4: {
    id: number,
    nombre?: string     //Con esto lo que hacemos es que este campo no es Obligatorio
} ={
    id: 2
}

objeto4.nombre="Alberto"

const objeto5: {
    readonly id: number,    //Con esto lo que hacemos que no podamos modificar este valor del objeto
    nombre?: string         //Con esto lo que hacemos es que este campo no es Obligatorio
} ={
    id: 2
}
const objeto6: {
    readonly id: number,    //Con esto lo que hacemos que no podamos modificar este valor del objeto
    nombre?: string,
    talla: Talla4       //Con esto lo que hacemos es que este campo no es Obligatorio
} ={
    id: 2,
    nombre: "Gabriel",
    talla: Talla4.Chica
}

type Persona={              //Con esto creamos un tipo de recurso que puedo usar a la hora de crear diferentes objetos concretos                    de ese mismo tipo
    readonly id: number,    //Con esto lo que hacemos que no podamos modificar este valor del objeto
    nombre?: string,
    talla: Talla4       //Con esto lo que hacemos es que este campo no es Obligatorio
} 

const objeto7: Persona ={
    id: 2,
    nombre: "Gabriel",
    talla: Talla4.Chica
}

type Persona2={              //Con esto creamos un tipo de recurso que puedo usar a la hora de crear diferentes objetos concretos                    de ese mismo tipo
    readonly id: number,    //Con esto lo que hacemos que no podamos modificar este valor del objeto
    nombre?: string,
    talla: Talla4  
    direccion: {
        municipio:  string,
        calle:  string,
        numero: number
    }     //Con esto lo que hacemos es que este campo no es Obligatorio
} 

const objeto8: Persona2 ={
    id: 2,
    nombre: "Gabriel",
    talla: Talla4.Chica,
    direccion: {
        municipio: "Santiponce",
        calle: "Antonio Machado",
        numero: 10
    }
}

console.log(`Esta es la dirección de mi Vivienda: c/${objeto8.direccion.calle} num: ${objeto8.direccion.numero}, ${objeto8.direccion.municipio}`)


// Además de Definir los Tipos de Los Objetos, podemos COMPONER los tipos de los Objetos

type Direccion = {
    municipio: string,
    calle: string,
    numero: number
}

type Persona3={              //Con esto creamos un tipo de recurso que puedo usar a la hora de crear diferentes objetos concretos                    de ese mismo tipo
    readonly id: number,    //Con esto lo que hacemos que no podamos modificar este valor del objeto
    nombre?: string,
    talla: Talla4  
    direccion: Direccion   //Con esto lo que hacemos es que este campo no es Obligatorio
} 

const objeto9: Persona3 ={
    id: 2,
    nombre: "Gabriel",
    talla: Talla4.Chica,
    direccion: {
        municipio: "Sevilla",
        calle: "Honderos",
        numero: 3
        }
}

console.log(`Esta es la dirección de mi Vivienda: c/${objeto9.direccion.calle} num: ${objeto9.direccion.numero}, ${objeto9.direccion.municipio}`)

const listPers: Persona3[]=[] //Dentro de este Arreglo(/Array  solo pueden existir Objetos del Tipo Persona3)

console.log(`Esta es la Talla Obtenida del Objeto con Tipo de Dato Talla (Enum): ${objeto6.talla}`)

const acceso: (a: number, msg: string)=> string = (edad: number, msg:string="Duro") => {
    if (edad>=18)
        return `Rabo de Toro ${msg}`
    else 
        return `Toma del frasco Carrasco`
}

console.log(acceso(15,"Duro"))

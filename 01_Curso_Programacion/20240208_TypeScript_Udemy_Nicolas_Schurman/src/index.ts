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

function otra(input: string): boolean {
    if (input=="Hola") 
        return true
    else 
        return false
}

console.log(`Primera Prueba Funcion definida como function: ${otra("Hola")}`)

console.log(`Segunda Prueba Funcion definida como function: ${otra("Rabo")}`)

// Hay un tipo de datos que se usa exclusivamente cuando se van a utilizar funciones que devolveran ERRORES
// Este tipo de Dato es "never"

function ErrorUsuario(): never { // Es muy importante destacar que esta funciones solo devolveran error / despacharán error.
    // Al devolver never, estamos indicando que esta función no puede devolver nada, está pensada exclusivamente para gestionar/lanzar algún tipo de error.
    throw new Error("Error de Usuario")
}



//Union type, es cuando podemos hacer uso de dos tipos de variables para una misma variable

let puntaje: number | string | boolean | Talla4=98;

puntaje="Hola Mundo";

//Union type, no solo sirve para tipos primitivos, también sirve para todos los tipos

type Animal={
    id: number,
    estado: string
}

type Usuario= {
    id: number,
    name: string
}

let animal: Animal | Usuario ={id: 1, estado: "Vivo"}
let animal2: Animal | Usuario ={id: 1, estado: "Vivo", name: "Jose"}

console.log(`Imprimiendo por Pantalla el Objeto Animal: ${animal.estado}`)

function suma2(n: number | string): number {
    if(typeof(n)==="number"){
        return n+2
    } else {
        if(Number.isNaN(parseInt(n))){
            return 33 +2
        } else {
            return parseInt(n)+2
        }
    }
}
console.log(`Estamos escribiendo resultado de funcrion suma2(): ${suma2("Porra")}`)
console.log(`Estamos escribiendo resultado de funcrion suma2(): ${suma2(5)}`)

// console.log(ErrorUsuario())

// Vamos a Analizar Ahora como Funcionan los Tipos de Variables 'Intersection type'

let chanchito: number | string = "feliz" 

type Audit = {
    created_at: string,
    modified_at: string
}

type Product ={
    name: string
}

// Este es un objeto de Tipo Intersection TypeError. Este Objeto contiene las propiedades de los dos Tipos
const product: Audit & Product = {
    created_at: "",
    modified_at: "",
    name: ""
}

// Nos vamos ahora con los Tipos Literales
// Podemos indicarle los valores que puede tomar una varaible

type Fibo= 0 | 1 | 3 | 5

const nDeFibo: Fibo = 3

//Vamos a Ver como trabajamos con valores Nulos
//Nullables types
// Es algo muy positivo que TypeScript me avise/no me permita asignar en código un valor nullo a una función que espera otro tipo de variable

function toNumber(s: string | null | undefined) {
    if (s){
        return parseInt(s)
    } else {
        return 0
    }
}

const n= toNumber(null)
const n2= toNumber(undefined)

// Ahora Vamos a Ver el Optional Chaining Operator
//Con este Operador "?" Podemos 

function getUser (id: number) {
    if (id<0) {
        return null
    } else {
        return {
            id: id, 
            name: "Felipe",
            create_at: new Date()
        }
    }
}

const userJose = getUser(-1)

console.log('Usuario: ', userJose?.create_at)  //Con el Operador "?" antes de la Propiedad del Objeto TypeScript se encarga de verificar si existe o no esa propiedad

// Con este Operador "?" Optional chaining Operator me ahorro tener que escribir todo este código
// Este operador podemos usarlo cuando tenemos propiedades de Objetos que pueden ser Null or Undefined

if(userJose && userJose?.create_at) {
    console.log('Usuario: ', userJose?.create_at)
} else {
    console.log('Usuario: No Existe ')
}

const arr1=null

console.log(arr1?.[0])

const fn5:any=null

console.log(fn5?.())

const Rabito=()=>{
    console.log("Rabito Bien Duro de la Function fn()")
}

function cb(fn: Function){
    if (fn) {
        fn()
    }
}

cb(Rabito)


// Nullish coalescing Operator

const difficulty: number | null = null
const difficulty2: number | null = 0

const user2 ={
    username: "chanchito feliz",
    // difficulty: difficulty || 1 // Con el Operador || lo que hace es que en caso de que:
    //     difficulty sea falsey:
    //         -  ""
    //         - 0
    //         - undefined - null
    //         Toma el otro valor en este caso "1"
    //     Pero como me interesa que en caso de que sea "0" si coja el valor de cero, necesito usar este otro Operador, Nullish Coalescing Operator
    difficulty: difficulty ?? 1
}
const user3 ={
    username: "Chanchito Feliz Perreador",
    difficulty: difficulty2 ?? 1
}

console.log("Difficulty: " , user2.difficulty)

console.log(user2)

console.log(user3)


// Type Assertion 
// Al parecer lo usamos cuando nosotros sabemos con certeza el tipo de dato, pero es posible que l compilador tenga algun tipo de dificultad a la hora de identificar el tipo de dato.

const elem2: any= null


const elem3=elem2 as number // Estamos forzando a que el elem3 sea un number, independientemente del tipo de dato que pueda ser elem2. ¿Esto es necesariamente malo? En este caso no tiene mucho sentido. 
// Este Operador, en cambio tiene mucho sentido cuando me traigo un dato de la base de datos y yo se que tipo de dato es o cuando me traigo un elemento del DOM con el método por ejemplo getElementbyId()

//const input =document.getElementById('username') as HTMLInputElement 
//En este caso si es de utilidad. Con esto voy a conseguir que el compilñador de TypeScript me va a ofrecer todas las propiedades de dicho tipo de objeto.

//const input2 =<HTMLInputElement>document.getElementById('username') //Esta es otra manera de hacer uso de Operador Type Assertion

//Type Narrowing


function lala(x: number | string) {
    // type narrowing
    if(typeof(x)==="number"){
        return x.toString()
    }
    if(typeof(x)==="string"){
        return x.endsWith("s")
    }

    return "Usa un tipo de Dato Valido para la function lala()"
}

console.log("Function lala() con un number: ", lala(33))
console.log("Function lala() con un string: ", lala("Rabito duro"))


// Type Unknown. Este tipo es mejor que Any y Ahora lo vamos a Explicar.

function procesa(algo: unknown) {
    if(typeof algo ==="string") {
        return algo.toUpperCase()
    }
    if(typeof algo ==="number") {
        return algo.toString()
    }

    return "Introduce un tipo de dato correcto"
}

console.log("Resultado de la funcion procesa(): ", procesa("Amapola"))
console.log("Resultado de la funcion procesa(): ", procesa(44))




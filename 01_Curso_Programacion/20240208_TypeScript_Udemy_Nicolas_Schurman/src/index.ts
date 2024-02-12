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




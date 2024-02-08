<script setup lang="ts">
import { findDir } from '@vue/compiler-core';
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230120 Sexta Clase de Refuerzo JS 
//Funciones y Funciones de Flecha =>

function saludar() {
  return 'Hola Perro'
}
console.log(saludar())

const nombre='Tony'

function saludar2(name) {
  return `Hola ${name}`
}
console.log(saludar2(nombre))

// Suele ser recomendable asignar funciones a una constante. Esto es un poco más seguro desde del punto de Depurar y Errores en la programación

function saludar3(name) {
  return `Hola ${name}`
}
// Me permite asignar una variable a la función creada previamente
saludar3=true

console.log(saludar3)


const saludar4 = function (name2) {
  return `Hola ${name2}`
}
const nombre4='Perro Judio'
console.log(saludar4(nombre4))

// Funciones de Flecha

const saludar5 =(name5) => {
  return `Hola ${name5}`
}

console.log(saludar5('Emilio'))

// Las Funcione de Flecha se puede simplificar cuando solo tiene una salida

const saludar6 = name6 => `Hola ${name6}`

console.log(saludar6('Anastasio'))

// Los paréntesis para el paso de los parámetros solo son obligatorios cuando hay más de un parámetro de entrada para la función

const saludar7 = (name7a, name7b) => `Hola ${name7a} y ${name7b}`

console.log(saludar7('Servando','Anacleto'))

const saludar8= (name8a, name8b='Hipólito') => `Hola ${name8a} y ${name8b}`

console.log(saludar8('Ilde'))


const getUser = () => {
  return {
    uid:'ABC1234',
    username: 'Tony001'
  }
}

console.log(getUser())


const getUser2 = xyz => ({ uid:'ABC1234', username: 'Tony001'})


console.log(getUser2())


const getUser3 = () => ({
   uid:'ABC1234',
   username: 'Tony001'
  })

console.log(getUser3())


const heroes =[{
    id:1,
    name:'Batman', }, 
  {
    id:2,
    name:'Superman'
  }
]
console.log(`Este niño se llamará ${heroes[1].name}`)


// Existen dos Métodos interesantes para Arrays que nos peuden ser mucha utilidad.
// El Primer Método es el de .some. Devuelve True o false
// El Segundo Método es el de .finder. DEvuelve el objeto encontrado

const Id_Sede=2

const existebyId = heroes.some ((heroe) => heroe.id===Id_Sede)
  
console.log(existebyId)


const name_Sede='Batman'

const existebyname = heroes.some ((heroe) => heroe.name===name_Sede)
  
console.log(existebyname)


const heroe = heroes.find ((heroe) => heroe.id===Id_Sede)
  
console.log(heroe)

console.log(heroe.name)

// Ahora para simplificar podemos desestructur el resultado de la función some y find

const {name, id} = heroes.find ((heroe) => heroe.id===Id_Sede)
  
console.log(name)

console.log(id)



</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>



  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

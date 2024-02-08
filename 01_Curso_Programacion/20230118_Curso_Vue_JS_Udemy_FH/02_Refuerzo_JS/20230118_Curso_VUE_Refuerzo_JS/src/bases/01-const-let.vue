<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230119 Primera Clase de Refuerzo JS 
//Diferencia Entre var, let y const

const nombre='Tony'
const apellido='Stark'

console.log(nombre, apellido)

if (true) {
    const nombre='Peter'
    console.log(nombre)
}

if (true) {
  //const nombre3='Peter'
  console.log(nombre3)
}

let nombre5 ='Tronco5'
const apellido5='Mocho5'
if (true) {
  let nombre5='Peter5'
  console.log(nombre5)
}
console.log(nombre5, apellido5)

if (true) {
  //const nombre2='Peter'
  console.log(nombre2)
}
var nombre3='Manolo el del Bombo'






// import { owners } from './data/heroes'

import SuperHeroes from './data/heroes.js'

import {Rabo_Heroes} from './data/heroes.js'

console.log('Hello World')

//console.log( owners )

console.log(SuperHeroes)

console.log(Rabo_Heroes)

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

<script setup lang="ts">
import { findDir } from '@vue/compiler-core';
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230122 Octava Clase de Refuerzo JS 
//Desestructuracion de Arreglos/Arrays

const characters =['Goku', 'Vegeta', 'Trunk']

const goku=characters[0]
const vegeta=characters[1]
const trunks=characters[2]

console.log(goku, vegeta, trunks)

// La Diferencia entre Desestructura un Objeto y un arreglo es que:
// - Para Desestructurar Objeto usamos {}
// - Para Desestructura Arreglo/Array usamos []

const [goku2, vegeta2, trunk2]=characters

console.log(goku2, vegeta2,trunk2)



const [goku3, vegeta3, trunk3,picolo='Picollo']=characters

console.log(trunk3, picolo)

const returnArray =() => {
  return ['ABC', 123]
}

const [letter, num]=returnArray()

console.log(letter,num)

const returnArray2 =(arr) => {
  return [arr[0], arr[1]]
}

const [letter2, num2]=returnArray2(['Perra', 879302.345])

console.log(letter2,num2)


const returnArray3 =([letter,number]) => {
  return [letter, number]
}

const [letter3, num3]=returnArray2(['Cerda', 132542.978])

console.log(letter3,num3)

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

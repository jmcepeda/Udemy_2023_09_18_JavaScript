<script setup lang="ts">
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230120 Quinta Clase de Refuerzo JS 
//Arrays - Arreglos

const arreglo0= new Array(2)
arreglo0[1]='Tronco'
console.log(arreglo0)

const arreglo = [ ]
arreglo[0]=33
arreglo[1]='Tremendo'

console.log(arreglo)

const arreglo1=[1,2,3,4]

console.log(arreglo1)
console.log(arreglo1[3])

// Utilizando Método del Array/arreglo, solo puede modificar aquello que no está en memoria dado que he definido el array como una ConstantTypes.

arreglo1.push(5)

const arreglo2=arreglo1

arreglo2.push(9)

// Como los dos Arreglos/Arrays apuntan al mismo espacio de memoria si modifico uno de los arreglos el otro también se ve modificado

arreglo1.push(7)

console.log(arreglo1)

console.log(arreglo2)

// Utilizando el operador Spreed puedo romper la referencia. Con el Operador puedo crear un nueva relación a un nuevo espacio en Memoria
const arreglo3=[...arreglo1]

console.log(arreglo3)

arreglo3.push(12)

arreglo1.push(99)


console.log(arreglo1)
console.log(arreglo3)

//Otras alternativas para Romper la Relación

// Con el Método Map También Rompemos Relación y Reservamos nuevo espacio en memoria
const arreglo4=arreglo1.map(function (n) {
  return n*2
})

console.log(arreglo4)

arreglo4.push(123)
console.log(arreglo4)







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

<script setup lang="ts">
import { findDir } from '@vue/compiler-core';
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230124 Novena Clase de Refuerzo JS 
//Promesas y sus Argumentos

console.log('Inicio')

new Promise ((resolve, reject) => {

  console.log('Cuerpo de la Primera Promesa')
  resolve ('Primera Promesa Resuelta')

}).then(msg => console.log (msg))

new Promise ((resolve, reject) => {

console.log('Cuerpo de la Segunda Promesa')
// resolve ('Segunda Promesa Resuelta')
reject ('Error: Segunda Promesa')


}).then( console.log)
  .catch(console.log)


new Promise ((resolve, reject) => {

console.log('Cuerpo de la Tercera Promesa')
reject ('Error: Tercera Promesa')

})
.then(console.log)
.catch(console.log)

new Promise ((resolve, reject) => {

console.log('Cuerpo de la Cuarta Promesa')
resolve ('Cuarta Promesa Resuelta')

})
.then(resolv => console.log(resolv))
.catch(console.log)

console.log('Fin')

import {getHeroById} from './bases/08-imp-exp_js'

console.log(getHeroById(9))

const getHeroeByIdAsync = (id) => {
  return new Promise ((resolve, reject) => {
      console.log('Traga Semen a Primero')
      // resolve('traga Todo Resolve')
      setTimeout(() => {
          console.log(id)
          const heroe = getHeroById(id)
          console.log(id)
          console.log(heroe)
          if(heroe) {
              resolve(`Este es nuestro Heroe: ${heroe.name}`)
          } else {
              reject(`No se ha podido localizar Heroe con Id: ${id}`)
          }
        }, 1)
      })
      // .then(console.log)
      // .catch(console.log)
    
  }

  getHeroeByIdAsync(8).then(h => console.log(h))

  getHeroeByIdAsync(12).catch(h => console.log(h))

  getHeroeByIdAsync(10)
    .catch(h => console.log(h))

  getHeroeByIdAsync(11)
    .then(h => console.log(h))

  





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

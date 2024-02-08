<script setup lang="ts">
import { findDir } from '@vue/compiler-core';
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230123 Novena Clase de Refuerzo JS 
//Exportaciones e Importaciones 
// Las Impoprtaciones por defecto se hacen sin corchetes.
// Para el resto de Exportaciones debe usarse corchetes y meter dentro de los corchetes todo lo que necesitemos importarnos {A, B, C}

import heroes_Toto, {owners2, owners_Toto,Rabo_Heroes, owners} from '../data/heroes'


//Es importante tener presente que cuando importamos algo de un archivo".js", dicho archivo se ejecuta, por lo que si hay muchas rutinas y es un proceso pesado peude relentizar el tiempo de respuesta y mi aplicación

console.log(owners2)

const [dc2, marvel2]=owners2

console.log(dc2)
console.log( marvel2)


// import {Rabo_Heroes, owners} from './data/heroes'

console.log(Rabo_Heroes)
console.log(owners)

console.log(heroes_Toto)


const getHeroById = (Id) => {
  // return heroes_Toto.find(heroe_f => heroe_f.id===Id)
  return heroes_Toto.find(heroooe => heroooe.id===Id)
  
}

console.log(getHeroById(8))

const getHeroByOwner = (owner) => {
  // return heroes_Toto.find(heroe_f => heroe_f.id===Id)
  return heroes_Toto.filter(heroooe => heroooe.owner===owner)
  
}

console.log(getHeroByOwner('Marvel_Toto'))


const getHeroByOwner2 = (owner) => (heroes_Toto.filter(heroooe => heroooe.owner===owner))
  
console.log(getHeroByOwner2('DC_Toto'))


const getHeroByOwner3 = (owner) => heroes_Toto.filter(heroooe => heroooe.owner===owner)

console.log(getHeroByOwner3('DC_Toto'))

export {getHeroById, getHeroByOwner};


// console.log(getHerobyIOwner('DC_Toto'))

// const getHerobyOwner = () => {
  
// }

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

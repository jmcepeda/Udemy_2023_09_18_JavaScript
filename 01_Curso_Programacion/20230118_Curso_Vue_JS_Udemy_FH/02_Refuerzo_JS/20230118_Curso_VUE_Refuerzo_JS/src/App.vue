<script setup lang="ts">
import { findDir } from '@vue/compiler-core';
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230131 Duodécima Clase de Refuerzo JS 
//Axync - Await

const miPromesa = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve('Esta es la Primera Promesa')
    }, 1000);
  })
}
console.log('Inicio')

miPromesa()
  .then (console.log)
  .catch (console.log)

const medirTiempoAsync = () => {
  console.log('Inicio medirTiempoAsync')
  miPromesa()
  console.log('Fin medirTiempoAsync')
}

medirTiempoAsync()


const medirTiempoAsync2 = async () => {
  console.log('Inicio medirTiempoAsync2')
  miPromesa()
  console.log('Fin medirTiempoAsync2')
  return 'Return de medirTiempoAsync2'
}

medirTiempoAsync2()
  .then (console.log)

console.log('Fin')

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

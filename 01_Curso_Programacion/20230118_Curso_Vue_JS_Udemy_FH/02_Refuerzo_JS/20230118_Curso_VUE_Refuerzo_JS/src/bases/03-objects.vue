<script setup lang="ts">
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230120 Cuarta Clase de Refuerzo JS 
//Object Literals
// Los Objetos en JavaScript están pasados por referencia y no por Valor



const persona = {
  nombre:'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 1234987,
    lng: 34.56,
    lat: -6.3
  }
}

console.log(persona)

const persona2=persona
persona2.nombre='Peter'

console.log(persona2)
console.log(persona)

// Ambos objetos tienen el nombre PerformanceEntry, cualquier modificación sobre cualquiera de los dos objectos afecta al onstorage. Esto es así porque se guarda en el mismo espacio de memoria y se referencia a dos variables diferentes.

// Para romper esa forma de hacer 


const persona3= {persona}
console.log(persona3)

// Operador Spread. Creo un objeto que tiene el objeto persona dentro
// Con esto Rompemos la Referencia entre los dos objetos

const persona4= {...persona}
persona4.edad=58
console.log(persona4)
console.log(persona)


// No Confundir Objetos con Set
// Esto es un Set. Esto e usará más tarde. Es como un Arreglo (Array Sin Duplicados)
const personaSet = new Set ()

console.log(personaSet)

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

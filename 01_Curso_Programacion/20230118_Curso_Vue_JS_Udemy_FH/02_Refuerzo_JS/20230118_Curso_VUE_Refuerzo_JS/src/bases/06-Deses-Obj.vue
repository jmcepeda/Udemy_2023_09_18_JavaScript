<script setup lang="ts">
import { findDir } from '@vue/compiler-core';
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230121 Septima Clase de Refuerzo JS 
//Dssestructuracion de Objetos

const person = {
  name: 'Tony',
  age:  48,
  nick: 'Ironman'
}

console.log(person)

console.log(person.name)
console.log(person.age)
console.log(person.nick)

const {name2, age2, nick2} = {
  name2: 'Tony',
  age2:  48,
  nick2: 'Ironman'
}
console.log('Estos son los datos del Objeto:', name2, age2, nick2)

console.log(person)

const { name, age, nick, power='No Tiene Poder' } = person

console.log(name2, age2, nick2)

const creatHeroe =(person) => {
  return {
    id: 1865289,
    name: person.name,
    age:person.age,
    nick:person.nick,
    power:person.power
  }
}

console.log(creatHeroe(person))

const creatHeroe2 =(person) => {
  const {id='1865289', name, age, nick, power='10.550'}=person
  return {
    id,
    name,
    age,
    nick,
    power
  }
}

console.log(creatHeroe2(person))

const creatHeroe3 =({name, age, nick, power='10.550', id='1865289'}) => {
  return {
    id,
    name,
    age,
    nick,
    power
  }
}

console.log(creatHeroe3(person))

const creatHeroe4 =({name, age, nick, power='10.550', id='1865289'}) => ({id,name,age,nick,power})

console.log(creatHeroe4(person))

const creatHeroe5 =({name:nombre, age:edad, nick, power='10.550', id='1865289'}) => ({id,nombre,edad:edad-15,nick,power})

console.log(creatHeroe5(person))


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

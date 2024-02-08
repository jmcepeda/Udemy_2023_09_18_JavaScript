<script setup lang="ts">
import { findDir } from '@vue/compiler-core';
import { objectToString } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//20230126 Décima Clase de Refuerzo JS 
//Fetch API

const APIKey ='yChkXrQE7btX00D50mI6nj8GacniH7MT'

const URL='https://api.giphy.com/v1/gifs/random?api_key='

fetch(`${URL}${APIKey}`)
  .then( resp => {
    console.log(resp)
  })
  .catch(err => {
    console.log(err)
  })

  fetch(`${URL}${APIKey}`)
  .then( resp => {
    console.log(resp.json())
  })
  .catch(err => {
    console.log(err)
  })

  fetch(`${URL}${APIKey}`)
  .then( resp => {
    resp.json()
      .then (resp=> console.log(resp))
  })
  .catch(err => {
    console.log(err)
  })

  fetch(`${URL}${APIKey}`)
  .then( resp => resp.json())
    .then(img => console.log(img))
  .catch(err => {
    console.log(err)
  })

  fetch(`${URL}${APIKey}`)
  .then( resp => resp.json())
    .then(img => console.log(img.data))
  .catch(err => {
    console.log(err)
  })

  fetch(`${URL}${APIKey}`)
  .then( resp => resp.json())
    .then((data) => console.log(data))
  .catch(err => {
    console.log(err)
  })

  fetch(`${URL}${APIKey}`)
  .then( resp => resp.json())
    .then(({data}) => console.log(data.images.original.url))
  .catch(err => {
    console.log(err)
  })

  fetch(`${URL}${APIKey}`)
  .then( resp => resp.json())
    .then(({data}) => {
      const {url} =data.images.original
      console.log(url)
      //Vamos a crear una imagen en el DOM para mostrar las imagenes de la URL obtenida con el fetch. Para hacer esto aquí vamos a usar JavaScript Vanila.
      const img = document.createElement('img')
      img.src=url
      document.body.append(img)
    })







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

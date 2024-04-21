import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import { Greeting } from './Greeting'
// import ComponenteJMC from './ComponenteJMC'
// import './index.css'

// import { UserCard } from "./UserCard";
// import Animals, { Plants } from "./Animals";
// import { Button } from './Button'

import { ComponenteCombinado } from './ComponenteCombinado';

// const Algoritmos = { title: "Algoritmos", name: "Ramona" };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
    {/* <Greeting />
    <Button title="Boton de Componente" amount={2345} activated={true} />
    <UserCard />
    <Plants
      title="Rabito"
      name="Alberto"
      amount={3000}
      married={true}
      points={[99, 33.3, 34, 2]}
      address={{ street: "123 Main streere", city: "New York City" }}
      greet={function () {
        alert(
          "Probando Primera Función pasada como props a un commponente en React"
        );
      }}
    />
    <Animals title="Animales de todas las Clases" name="Manuel" /> */}

    <ComponenteCombinado />


    {/* <Button title="Boton de Componente" amount={2345} activated={true} />
    <Button title="Alarma" amount={2345} activated={true} />
    <Button title="Rápido" amount={2345} activated={true} />
    <Button title={{ text: "Amapola" }} amount={2345} activated={true} />
    <UserCard />
    <Animals title="Animales de todas las Clases" name="Manuel" />
    <Animals title="Más Animales, para que no falten" />
    <Plants
      title="Rabito"
      name="Alberto"
      amount={3000}
      married={true}
      points={[99, 33.3, 34, 2]}
      address={{ street: "123 Main streere", city: "New York City" }}
      greet={function () {
        alert(
          "Probando Primera Función pasada como props a un commponente en React"
        );
      }}
    />
    <Plants
      title="Otro Objeto de React"
      name="Roberto"
      amount={1750}
      married={false}
      points={[9, 1.3, 99, 88]}
      address={{ street: "987 Rear Streer", city: "Boston" }}
      greet={function () {
        alert(
          "Probando Segunda Función pasada como props a un commponente en React"
        );
      }}
    />
    <Greeting title="Tronquito" name="Eire" />
    <div>
      <h1>Comenzando con Componentes de React</h1>
      <Greeting title="Amapola" name="Irene" />
      <Greeting title="Acantilado" name="Sofia" />
      {Greeting(Algoritmos)}
    </div> */}
  </>
  </React.StrictMode>,
)

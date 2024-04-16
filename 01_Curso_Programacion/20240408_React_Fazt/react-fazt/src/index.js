import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import { UserCard } from "./UserCard";
import Animals, { Plants } from "./Animals";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
const Algoritmos = { title: "Algoritmos", name: "Ramona" };

root.render(
  <>
    <Greeting />
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
    />
    <Greeting title="Tronquito" name="Eire" />
    <div>
      <h1>Comenzando con Componentes de React</h1>
      <Greeting title="Amapola" name="Irene" />
      <Greeting title="Acantilado" name="Sofia" />
      {Greeting(Algoritmos)}
    </div>
  </>
);

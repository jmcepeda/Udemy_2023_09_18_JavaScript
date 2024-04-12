import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import { UserCard } from "./UserCard";
import Animals, { Plants } from "./Animals";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Greeting />
    <UserCard />
    <Animals />
    <Plants />
    <Greeting />
    <div>
      <h1>Comenzando con Componentes de React</h1>
      <Greeting />
      <Greeting />
      {Greeting()}
    </div>
  </>
);

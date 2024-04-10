import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

function Greeting() {
  const prueba = "Prueba de Funcionamiento de Texto en React";
  const prueba2 = "Otra Prueba de Funcionamiento de Texto en React";
  const prueba3 = "Tercera Prueba de Funcionamiento de Texto en React";

  const name = "Troncoman";
  const married = false;
  const tiene_hijos = true;
  let estado_civil;
  if (married) {
    estado_civil = "Casado";
  } else {
    estado_civil = "Divorciado";
  }

  function sumar(x, y) {
    return x + y;
  }

  const x = 3,
    y = 4;

  const user = {
    firstName: "Jose",
    lastName: "Pérez",
    age: 30,
    isMarried: true,
    hasSon: true,
  };

  return (
    <div>
      <h1>{prueba}</h1>
      {prueba2}
      <br></br>
      {JSON.stringify(prueba3)}

      <h2>Hola React. Este es un Componente de React!!!</h2>
      <h3>
        Mi nombre es{" "}
        <em>
          <strong>{name}</strong>
        </em>
      </h3>
      <p>Este es un párrafo de un Componente de React</p>
      <p>
        Estado civil: <strong>{estado_civil}</strong>
      </p>
      <h3>Esta es otra forma de integrar JavaScript en React con jsx</h3>
      <p>{tiene_hijos ? "Tengo Hijos 😍" : "No Tengo Hijos 😉"}</p>
      <br></br>
      <h3>Usando Objetos en React con JavaScript con jsx </h3>
      <p>
        {user.firstName}:{" "}
        {user.isMarried ? "Está Casado 😍" : "Está Soltero 😉"}
      </p>
      <p>
        {user.firstName} {" :"}{" "}
        {user.hasSon ? "Tiene Hijos 😍" : "No Tiene Hijos 😉"}
      </p>
      <p>
        Vemos como se ve una variable Boolean:{" "}
        <strong>{user.isMarried.toString()}</strong>{" "}
      </p>
      <br></br>
      <p>
        El Resultado de la suma de :{" "}
        <strong>
          {" "}
          {x} + {y} = {sumar(x, y)}
        </strong>{" "}
      </p>
    </div>
  );
}

root.render(
  <>
    <Greeting />
    <Greeting />
    <div>
      <h1>Comenzando con Componentes de React</h1>
      <Greeting />
      <Greeting />
      {Greeting()}
    </div>
  </>
);

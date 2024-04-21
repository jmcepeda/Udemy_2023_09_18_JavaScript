import { Greeting } from "./Greeting";

import Animals from "./Animals";

import { Button } from "./Button";

import { Plants } from "./Animals";

import { UserCard } from "./UserCard";


export function ComponenteCombinado (){
    return (
        <>
            <div>
                <Greeting />
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
                <Animals title="Animales de todas las Clases" name="Manuel" />
            </div>
        </>
    )

}
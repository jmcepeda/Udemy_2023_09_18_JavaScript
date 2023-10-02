
function seleccionaPelicula() {
    let edad=document.getElementById("age");
    let edadvalue = edad.options[edad.selectedIndex].value

    let genero=document.getElementById("gen");
    let generovalue = genero.options[genero.selectedIndex].value

    console.log("Edad: " + edadvalue + " - Genero: " + generovalue);

    
    let peliculaSeleccionada=document.getElementById("peliculaSeleccionada");

    let combinado=edadvalue+generovalue;
    console.log("Combinado: " + combinado);

    let pelicula;

    switch (combinado) {
        case "kidscomedia":
            pelicula="Papa Canguro";
            break;

        case "kidsaccion":
            pelicula="Los niños al Poder";
            break;
        
        case "kidstodalaFamilia":
            pelicula="Las mejores Vacaciones";
            break;

        case "kidscienciaFiccion":
            pelicula="Niños de otra Galaxia";
            break;

        case "adolescentescomedia":
            pelicula="Adolescentes sin Limites";
            break;

        case "adolescentesaccion":
            pelicula="Adolescentes Zombies";
            break;
        
        case "adolescentestodalaFamilia":
            pelicula="Harry Potter";
            break;

        case "adolescentescienciaFiccion":
            pelicula="Adolescentes que vienen del Espacio";
            break;
        case "adultoscomedia":
            pelicula="Despedida de Soltero en Las Vegas";
            break;

        case "adultosaccion":
            pelicula="Fast & Furious";
            break;
        
        case "adultostodalaFamilia":
            pelicula="Ghost";
            break;

        case "adultoscienciaFiccion":
            pelicula="Terminator";
            break;

        default:
            pelicula="Algo no ha funcionado"
    }
    
    peliculaSeleccionada.textContent=pelicula;

    document.write(`<p>Perra Judia. Hija de Puta ${pelicula}</p>`);

    
}
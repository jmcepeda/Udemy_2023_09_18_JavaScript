
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
            pelicula="1";
            break;

        case "kidsaccion":
            pelicula="2";
            break;
        
        case "kidstodalaFamilia":
            pelicula="3";
            break;

        case "kidscienciaFiccion":
            pelicula="4";
            break;

        case "adolescentescomedia":
            pelicula="5";
            break;

        case "adolescentesaccion":
            pelicula="6";
            break;
        
        case "adolescentestodalaFamilia":
            pelicula="7";
            break;

        case "adolescentescienciaFiccion":
            pelicula="8";
            break;
        case "adultoscomedia":
            pelicula="9";
            break;

        case "adultosaccion":
            pelicula="10";
            break;
        
        case "adultostodalaFamilia":
            pelicula="11";
            break;

        case "adultoscienciaFiccion":
            pelicula="12";
            break;

        default:
            pelicula="Algo no ha funcionado"
    }
    
    peliculaSeleccionada.textContent=pelicula;

    
}
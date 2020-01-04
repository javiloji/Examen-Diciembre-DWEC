{

    /**
     * 
     * Éste código se ejecutará cuándo se pulse sobre el botón 
     * empleado en la página principal
     * 
     * @author Javier Lopera Jiménez
     * 
    */

    let inputs;
    let nombre;
    let fecha;
    let dni;
    let nombreRegexp;
    let inputNombre;
    let inputFecha;
    let inputDni;

    let validarNombre = () => {

        inputNombre = document.getElementById("inputNombre");
        inputFecha = document.getElementById("inputFecha");
        inputDni = document.getElementById("inputDni");

        nombreRegexp = new RegExp("a-z");

        if (!nombreRegexp.test(inputNombre)) {
            nombre.style.backgroundColor = "red";
        }
        else{
            nombre.style.backgroundColor = "green";
        }
    }

    let validarFecha = () =>{

        fecha.style.backgroundColor = "red";

    }

    let validarDni = () =>{

        dni.style.backgroundColor = "red";

    }

    let inicio = () => {

        

        inputs = document.getElementsByTagName("input");
        nombre = inputs[0];
        fecha = inputs[1];
        dni = inputs[2];

        nombre.addEventListener("blur", validarNombre);
        fecha.addEventListener("blur", validarFecha);
        dni.addEventListener("blur", validarDni);

    }




    document.addEventListener("DOMContentLoaded", inicio);

}
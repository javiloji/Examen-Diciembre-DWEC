{

    /**
     * 
     * Éste código se ejecutará cuándo se pulse sobre el botón 
     * empleado en la página principal
     * 
     * @author Javier Lopera Jiménez
     * 
    */

    // Arrays donde se almacenarán las expresiones regulares y el error correspondiente 
    // en caso de no ser válido

    let regExpNombre = new Array(new RegExp("^[a-zA-Zá-úÁ-Ú ]+$"), "Error. El nombre no es válido");
    let regExpFechaNacimiento = new Array(new RegExp("^[0-9]{2}/{1}|-{1}[0-9]{2}/{1}|-{1}[0-9]{4}$"), "Error. La fecha de nacimiento no es válida!");
    let regExpDni= new Array(new RegExp("(^[0-9]{8}-{1}| {1}[A-Za-z]{1}$)|(^[0-9]{8}[A-Za-z]{1}$)"), "Error. El dni no es válido!", "TRWAGMYFPDXBNJZSQVHLCKET");
    

    // Comprueba que el nombre sea correcto

    let comprobarNombre = function (nombre) {
        if (regExpNombre[0].test(nombre.trim()))
            return true;
        return false;
    }

    // Comprueba que la fecha sea correcto

    let comprobarFechaNacimiento = function (fechaNacimiento) {
        if (regExpFechaNacimiento[0].test(fechaNacimiento) && new Date(fechaNacimiento) != "Invalid Date")
            return true;
        return false;
    }

    // Comprueba que el Dni sea correcto

    let comprobarDni = function (dniCompleto) {
        let dniNumero = parseInt(dniCompleto[0] + dniCompleto[1] + dniCompleto[2] 
            + dniCompleto[3] + dniCompleto[4] + dniCompleto[5] + dniCompleto[6] + dniCompleto[7]);
        if (regExpDni[0].test(dniCompleto.trim()) 
        && regExpDni[2][dniNumero % 23] == dniCompleto[dniCompleto.length - 1].toUpperCase())
            return true;
        return false;
    }

    let salir = () => {

        window.close();

    }

    
    let inicio = () => {

        let inputNombre = document.getElementById("inputNombre");
        let inputFecha = document.getElementById("inputFecha");;
        let inputDni = document.getElementById("inputDni");;
        let errorNombre = document.getElementById("errorNombre");
        let errorFecha = document.getElementById("errorFecha");
        let errorDni = document.getElementById("errorDni");
        let botonCrearEmpleado = document.getElementById("botonCrearEmpleado");

        inputNombre.addEventListener("blur",function() {
            if(!comprobarNombre(inputNombre.value)){
                errorNombre.innerHTML = regExpNombre[1];
            }
            else{
                errorNombre.innerHTML = "";
            }
        });

        inputFecha.addEventListener("blur",function() {
            if(!comprobarFechaNacimiento(inputFecha.value)){
                errorFecha.innerHTML = regExpFechaNacimiento[1];
            }
            else{
                errorFecha.innerHTML = "";
            }
        });

        inputDni.addEventListener("blur",function() {
            if(!comprobarDni(inputDni.value)){
                errorDni.innerHTML = regExpDni[1];
            }
            else{
                errorDni.innerHTML = "";
            }
        });
        
        botonCrearEmpleado.addEventListener("click",function(){

            if(!comprobarNombre(inputNombre.value)){
                errorNombre.innerHTML = regExpNombre[1];
            }
            else{
                errorNombre.innerHTML = "";
            }

            if(!comprobarFechaNacimiento(inputFecha.value)){
                errorFecha.innerHTML = regExpFechaNacimiento[1];
            }
            else{
                errorFecha.innerHTML = "";
            }
            
            if(!comprobarDni(inputDni.value)){
                errorDni.innerHTML = regExpDni[1];
            }
            else{
                errorDni.innerHTML = "";
            }

            if(comprobarNombre(inputNombre.value) && comprobarFechaNacimiento(inputFecha.value) && comprobarDni(inputDni.value)){

                let nuevoEmpleado = new Empleado(inputNombre.value,inputFecha.value,inputDni.value);
                nuevoEmpleado.crearNuevaVentana();
                inputNombre.value = "";
                inputDni.value = "";
                inputFecha.value = "";

            }
            
        });


        let botonSalir = document.getElementById("salir");
        botonSalir.addEventListener("click", salir);

    }

    document.addEventListener("DOMContentLoaded", inicio);

}
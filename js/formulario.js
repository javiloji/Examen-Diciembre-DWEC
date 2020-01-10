{

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

        chequearNombre = () => {
            if (!comprobarNombre(inputNombre.value)) {
                errorNombre.innerHTML = regExp.regExpNombre[1];
            }
            else {
                errorNombre.innerHTML = "";
            }
        }

        chequearFecha = () => {
            if (!comprobarFechaNacimiento(inputFecha.value)) {
                errorFecha.innerHTML = regExp.regExpFechaNacimiento[1];
            }
            else {
                errorFecha.innerHTML = "";
            }
        }

        chequearDni = () => {
            if (!comprobarDni(inputDni.value)) {
                errorDni.innerHTML = regExp.regExpDni[1];
            }
            else {
                errorDni.innerHTML = "";
            }
        }

        inputNombre.addEventListener("blur", chequearNombre);

        inputFecha.addEventListener("blur", chequearFecha);

        inputDni.addEventListener("blur", chequearDni);

        botonCrearEmpleado.addEventListener("click", function () {

            chequearNombre();

            chequearFecha();

            chequearDni();

            if (errorNombre.innerHTML === "" && errorFecha.innerHTML === "" && errorDni.innerHTML === "") {

                let nuevoEmpleado = new Empleado(inputNombre.value, inputFecha.value, inputDni.value);
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

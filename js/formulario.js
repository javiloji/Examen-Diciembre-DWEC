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

        inputNombre.addEventListener("blur",function() {
            if(!comprobarNombre(inputNombre.value)){
                errorNombre.innerHTML = regExp.regExpNombre[1];
            }
            else{
                errorNombre.innerHTML = "";
            }
        });

        inputFecha.addEventListener("blur",function() {
            if(!comprobarFechaNacimiento(inputFecha.value)){
                errorFecha.innerHTML = regExp.regExpFechaNacimiento[1];
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
                errorNombre.innerHTML = regExp.regExpNombre[1];
            }
            else{
                errorNombre.innerHTML = "";
            }

            if(!comprobarFechaNacimiento(inputFecha.value)){
                errorFecha.innerHTML = regExp.regExpFechaNacimiento[1];
            }
            else{
                errorFecha.innerHTML = "";
            }
            
            if(!comprobarDni(inputDni.value)){
                errorDni.innerHTML = regExp.regExpDni[1];
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

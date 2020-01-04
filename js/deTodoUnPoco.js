{

    /**
     * 
     * Éste código se ejecutará cuándo se pulse sobre el enlade 
     * De todo un poco en la página principal
     * 
     * @author Javier Lopera Jiménez
     * 
    */

    /**
     * Declaro las variables globales
     */

    let parrafoDia;
    let parrafoHora;

    /*

    Función para el boton de informa, en el que se muestra el día de la semana y un mensaje en 
    función del horario
    
    */

    let informa = () => {

        let diaActual = new Date;
        let horaActual = diaActual.getHours();
        let minutosActuales = diaActual.getMinutes();

        switch (diaActual.getDay()) {
            case 1:
                parrafoDia.innerHTML = "Lunes";
                break;
            case 2:
                parrafoDia.innerHTML = "Martes";
                break;
            case 3:
                parrafoDia.innerHTML = "Miércoles";
                break;
            case 4:
                parrafoDia.innerHTML = "Jueves";
                break;
            case 5:
                parrafoDia.innerHTML = "Viernes";
                break;
            case 6:
                parrafoDia.innerHTML = "Sábado";
                break;
            default:
                parrafoDia.innerHTML = "Domingo";
                break;
        }

        if(horaActual>18){
            parrafoHora.innerHTML = "Son las " + horaActual + ":"+ minutosActuales+ ".  Ya es hora de que dejes de" +
            " trabajar. Hay que conciliar la vida laboral con la familiar."
        }
        else if(horaActual<8){
            parrafoHora.innerHTML = "Son las " + horaActual + ":"+ minutosActuales+ ".  Ya es hora de que comiences" +
            " a trabajar. Hay que levantar el país."
        }
        else{
            parrafoHora.innerHTML = "Son las " + horaActual + ":"+ minutosActuales+ ". Pronto llegan las vacaciones." +
            " Aguanta."
        }
    }

    /*
    
    Función para el boton de salir, cuando se pulsa cierra la ventana
    
    */

    let salir = () => {

        window.close();

    }

    //Función inicio

    let inicio = () => {

        parrafoDia = document.getElementById("parrafoDia");
        parrafoHora = document.getElementById("parrafoHora")

        let botonInforma = document.getElementById("informa");
        botonInforma.addEventListener("click", informa);

        let botonSalir = document.getElementById("salir");
        botonSalir.addEventListener("click", salir);

    }

    document.addEventListener("DOMContentLoaded", inicio);

}
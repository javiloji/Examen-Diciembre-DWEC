{

    /**
     * 
     * Comportamiento para la página principal.
     * 
     * @author Javier Lopera Jiménez
     * 
    */

    /*
        Funcion deTodoUnPoco en la que se abre una nueva ventana al pulsar en el enlace.
    */

    let deTodoUnPoco = () => {

        let nuevaVentanaEnlace = window.open("", "", "width=500px, height= 400px,top=200px,left=500px");
        nuevaVentanaEnlace.document.write(`
        <html>
            <head>
                <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                <title >De Todo Un Poco</title>
                <script src="js/deTodoUnPoco.js"></script>
                <link rel="stylesheet" href="css/style.css">
            </head>
            <body>
                <noscript>
                    <h1>Esta pagina necesita activar el contenido JavaScript</h1>
                </noscript>
                <h1>Javier Lopera Jiménez</h1>
                <div id="container">
                    <div id = "div">
                        <p id="parrafoDia"></p>
                        <p id="parrafoHora"></p>
                    </div>
                    <button id="informa">Informa</button>
                    <button id="salir">Salir</button>
                </div>
            </body>
        </html>
        `
        );
        nuevaVentanaEnlace.document.close();
    }
    /*
        Funcion nuevoEmpleado en la que se abre una nueva ventana al pulsar en el botón con el formulario
        para crear el empleado.
    */
    let nuevoEmpleado = () => {

        let nuevaVentanaEmpleado = window.open("", "", "");
        nuevaVentanaEmpleado.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="js/validar.js"></script>
            <script src="js/formulario.js"></script>
            <script src="js/Empleado.js"></script>
            <link rel="stylesheet" href="css/style.css">
            <title>Javier Lopera Jimenez</title>
        </head>
        <body>
            <noscript>
                <h1>Esta página necesita activar el contenido JavaScript</h1>
            </noscript>
            <h1>Javier Lopera Jiménez</h1>
            <h2>Examen Diciembre 2019</h2>
            <form id="formularioEmpleado">
                <label for="nombre">Nombre del empleado: </label><input id="nombre" type="text"><span id="errorNombre" style="color:red;"></span>
                <label for="fecha">Fecha de nacimiento: </label><input id="fecha" type="text"><span id="errorFecha" style="color:red;"></span>
                <label for="dni">DNI:  </label><input  id="dni" type="text"><span id="errorDni" style="color:red;"></span>
                
            </form>
            <button id="botonCrearEmpleado">Nuevo Empleado</button><br><br>
            <button id="salir">Salir</button>
            </body>
        </html>
        `);
        nuevaVentanaEmpleado.document.close();

    }

    let inicio = () => {

        document.getElementById("detodounpoco").addEventListener("click", deTodoUnPoco);
        document.getElementById("boton").addEventListener("click", nuevoEmpleado);

    }



    document.addEventListener("DOMContentLoaded", inicio);

}
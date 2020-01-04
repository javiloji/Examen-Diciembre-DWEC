{

    /**
     * 
     * Comportamiento para la página principal.
     * 
     * @author Javier Lopera Jiménez
     * 
    */

    let nuevaVentanaEnlace;
    let enlace;

    /*
        Funcion deTodoUnPoco en la que se abre una nueva ventana al pulsar en el enlace.
    */

    let deTodoUnPoco = () => {

        nuevaVentanaEnlace = window.open("", "", "width=500px, height= 400px,top=200px,left=500px");
        nuevaVentanaEnlace.document.write(`
        <html>
            <head>
                <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                <title id="titulo">Javier Lopera Jimenez</title>
                <script src="js/deTodoUnPoco.js"></script>
                <link rel="stylesheet" href="css/style.css">
            </head>
            <body>
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

    let inicio = () => {

        enlace = document.getElementById("detodounpoco");
        enlace.addEventListener("click", deTodoUnPoco);

    }

    

    document.addEventListener("DOMContentLoaded", inicio);

}
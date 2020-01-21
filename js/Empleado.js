{

    /**
     * 
     * Clase Empleado que crea un nuevo empleado coon un nombre,
     * una fecha de nacimiento y un dni validados mediante un formulario.
     * 
     * @param {*} nombre 
     * @param {*} fechaNacimiento 
     * @param {*} dni 
     * 
     * @author Javier Lopera Jiménez
     * 
     */

    // Constructor del empleado

    function Empleado(nombre, fechaNacimiento,dni){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }

    /**
     * 
     * Método para crear la ventana con el empleado
     * 
     */

    Empleado.prototype.crearNuevaVentana = function(){
        let ventana = window.open("","","width=500px, height= 400px,top=200px,left=500px");
        ventana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
            <title>Clase Empleado</title>
        </head>
        <body>
            <noscript>
                <h1>Esta pagina necesita activar el contenido JavaScript</h1>
            </noscript>
            <h2>Datos del empleado: </h2>
            <b>Nombre: </b> ${this.nombre} 
            <br><b>Fecha de nacimiento: </b> ${this.fechaNacimiento}
            <br><b>DNI: </b>${this.dni}
        </body>
        </html>
        `);
        ventana.document.close();
    }
}
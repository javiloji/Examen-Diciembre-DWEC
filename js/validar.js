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
    


    document.addEventListener("DOMContentLoaded", inicio);

}
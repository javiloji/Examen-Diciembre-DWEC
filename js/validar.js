

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
let regExp = {
    regExpNombre : [new RegExp("^[a-zA-Zá-úÁ-Ú ]+$"), "Error. El nombre no es válido"],
    regExpFechaNacimiento : [new RegExp("^[0-9]{2}/{1}|-{1}[0-9]{2}/{1}|-{1}[0-9]{4}$"), "Error. La fecha de nacimiento no es válida!"],
    regExpDni : [new RegExp("(^[0-9]{8}-{1}| {1}[A-Za-z]{1}$)|(^[0-9]{8}[A-Za-z]{1}$)"), "Error. El dni no es válido!", "TRWAGMYFPDXBNJZSQVHLCKET"]

}

// Comprueba que el nombre sea correcto

let comprobarNombre = function (nombre) {
    return (regExp.regExpNombre[0].test(nombre.trim()));
}

// Comprueba que la fecha sea correcto

let comprobarFechaNacimiento = function (fechaNacimiento) {
    return (regExp.regExpFechaNacimiento[0].test(fechaNacimiento) && new Date(fechaNacimiento) != "Invalid Date");
}

// Comprueba que el Dni sea correcto

let comprobarDni = function (dniCompleto) {
    let dniNumero = parseInt(dniCompleto[0] + dniCompleto[1] + dniCompleto[2]
        + dniCompleto[3] + dniCompleto[4] + dniCompleto[5] + dniCompleto[6] + dniCompleto[7]);
    return (regExp.regExpDni[0].test(dniCompleto.trim())
        && regExp.regExpDni[2][dniNumero % 23] == dniCompleto[dniCompleto.length - 1].toUpperCase());
}

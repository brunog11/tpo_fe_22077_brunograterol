
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
let nombre = document.getElementById('nombre').value;
let stl_nombre = document.getElementById('lblnombre');
let msg_nombre_error = "Solo se aceptan caracteres de textos y espacio, ejemplo para tu nombre y apellido."
//-----------
let email = document.getElementById('email').value;
let stl_email = document.getElementById('lblemail');
let msg_email_error = "Solo se aceptan caracteres de textos, puntos, guion medio, guion bajo y numeros."
//-----------
let fechaNac = document.getElementById('fechaNac').value;
let stl_fechaNac = document.getElementById('lblfechaNac');
let msg_fechaNac_error = "Tienes que ser mayor de 18 años para suscribirte"
//-----------
let genero = document.querySelector('input[name="genero"]:checked').value;
let stl_genero = document.getElementById('lblgenero');
//-----------
let comote = document.getElementById('comote').value;
let stl_comote = document.getElementById('lblcomote');
let msg_comote_error = "Debes seleccionar como te enteraste de nosotros"
//-----------
let desc = document.getElementById('desc').value;
let stl_desc = document.getElementById('lbldesc');
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//

//--------------------------------------//
function chk_nombre(nombre, stl_nombre){

    let letrasvalidas = /^[a-zA-Z+\s]+$/;

    if (nombre.match(letrasvalidas)) {
        stl_nombre.classList.remove("lblincorrecto");
        stl_nombre.classList.add("lblcorrecto");
        return true
    } else {
        stl_nombre.classList.remove("lblcorrecto");
        stl_nombre.classList.add("lblincorrecto");
        return false
    }

}

//--------------------------------------//
function chk_diremail(email, stl_email){

    let emailvalido = /^[a-zA-Z0-9+._-]+@[a-zA-Z0-9+._-]+$/;
    if(email.match(emailvalido)){
        stl_email.classList.remove("lblincorrecto");
        stl_email.classList.add("lblcorrecto");
        return true
    } else {
        stl_email.classList.remove("lblcorrecto");
        stl_email.classList.add("lblincorrecto");
        return false
    }

}

//--------------------------------------//
function chk_fechaNac(fechaNac, stl_fechaNac){

    let hoy = new Date();
    let anioActual = hoy.getFullYear();

    let anioNac = fechaNac.substr(0,4);

    if(anioActual-anioNac>18 && anioActual-anioNac<120){

        stl_fechaNac.classList.remove("lblincorrecto");
        stl_fechaNac.classList.add("lblcorrecto");
        return true
    } else {
        stl_fechaNac.classList.remove("lblcorrecto");
        stl_fechaNac.classList.add("lblincorrecto");
        return false
    }

}

//--------------------------------------//
function chk_genero(genero, stl_genero){

    if (genero == "Masculino" || genero == "Femenino" || genero == "Otro") {

        stl_genero.classList.remove("lblincorrecto");
        stl_genero.classList.add("lblcorrecto");

        return true
    } else {
        //cambie el estilo del label del input
        stl_genero.classList.remove("lblcorrecto");
        stl_genero.classList.add("lblincorrecto");

        return false
    }

}

//--------------------------------------//
function chk_comote(comote, stl_comote){

    if(comote == "Default"){
        stl_comote.classList.remove("lblcorrecto");
        stl_comote.classList.add("lblincorrecto");
        return false
    } else {
        stl_comote.classList.remove("lblincorrecto");
        stl_comote.classList.add("lblcorrecto");
        return true

    }

}
//--------------------------------------//
function chk_desc(desc, stl_desc){

    if(desc==""){
        return true
    }else{
        let caracteresValidos = /^[a-zA-Z0-0+\s.,:;¿?!¡]+$/;

        if (desc.match(caracteresValidos)) {
            stl_desc.classList.remove("lblincorrecto");
            stl_desc.classList.add("lblcorrecto");
            return true
        } else {
            stl_desc.classList.remove("lblcorrecto");
            stl_desc.classList.add("lblincorrecto");

            return false
        }
    }

}

//--------------------------------------//

//=======================================================================//
function chk_form(){

    //-----------
    let nombre = document.getElementById('nombre').value;
    let stl_nombre = document.getElementById('lblnombre');
    //-----------
    let email = document.getElementById('email').value;
    let stl_email = document.getElementById('lblemail');
    //-----------
    let fechaNac = document.getElementById('fechaNac').value;
    let stl_fechaNac = document.getElementById('lblfechaNac');
    //-----------
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let stl_genero = document.getElementById('lblgenero');
    //-----------
    let comote = document.getElementById('comote').value;
    let stl_comote = document.getElementById('lblcomote');
    //-----------
    let desc = document.getElementById('desc').value;
    let stl_desc = document.getElementById('lbldesc');



    if (
        chk_nombre(nombre, stl_nombre) &&
        chk_diremail(email, stl_email) &&
        chk_fechaNac(fechaNac, stl_fechaNac) &&
        chk_genero(genero, stl_genero) &&
        chk_comote(comote, stl_comote) &&
        chk_desc(desc, stl_desc)
        ) {
        console.log("formulario Valido");
        return true
    } else {
        console.log("formulario no Valido");
        return false
    }
    
}



//=======================================================================//


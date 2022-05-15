/* usuario desde el storage */
const usuario =  sessionStorage.getItem("usuario");


const usuarioStorage = JSON.parse(usuario);

/* usuario desde el storage */


/* email desde el storage */

const emailStorage = usuarioStorage.emailI;

/* email desde el storage */

/* email desde el input */
const emailInput = document.getElementById("emailIngreso");
/* email desde el input */

/* contra desde el input */
const contraStorage = usuarioStorage.passwordI;
/* contra desde el input */

const contraInput = document.getElementById("emailIngreso");



const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", clickLogin)


function clickLogin(e){

    e.preventDefault();



if( emailStorage === emailInput.value){

location = "./pages/carrito.html"





    console.log("bien")
}else{ 

    console.log( "mal")


    swal({
        title: "Email!",
        text: "Email o contraseña incorrecto",
        icon: "error",
        button: "volver",
      });
    
}

}
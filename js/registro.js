/* primera pre entrega del profecto final de JS */




let formU = document.getElementById("form-Usuarios");

let nombreU = document.getElementById("nombre-usuario");
let apellidoU = document.getElementById("apellido-usuario");
let emailU = document.getElementById("email-usuario");
let passwordU = document.getElementById("password-usuario");



let casilla1 = document.getElementById("contenedorU");


formU.addEventListener("submit", respuestaClick )

  function respuestaClick(e){

    e.preventDefault();
  
  
    
    let contra = passwordU.value;
    
       let infoU = { nombreI: nombreU.value ,apellidoI: apellidoU.value, emailI: emailU.value, passwordI: contra };
        
      
       console.log(contra)
       let infoEnJS =  JSON.stringify(infoU);    

        


       sessionStorage.setItem("usuario",infoEnJS);
        let usuario =  sessionStorage.getItem("usuario");

        casilla1.textContent ="Usuario activo : " + infoU.nombreI +" " + infoU.apellidoI;
        console.log(usuario);
         
          let listaUs = document.getElementById("listaU");
if( infoU.nombreI !== ""&& infoU.apellidoI !== "" && infoU.emailI!== "" && infoU.passwordI !== ""){

          swal({
            title: "Listo!",
            text: "Registro exitoso!",
            icon: "success",
            button: "continuar",
          });

          location = "../pages/carrito.html"

        } else{ 

          swal({
            title: "Error!",
            text: "debes completar todos los campos",
            icon: "error",
            button: "continuar",
          });

          
        } }
  


/* primera pre entrega del profecto final de JS */
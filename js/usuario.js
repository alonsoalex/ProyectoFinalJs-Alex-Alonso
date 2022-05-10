

const datosUsuario = sessionStorage.getItem("usuario");

const datosUsuarioJS = JSON.parse(datosUsuario);


const labenNombre = document.getElementById("labenNombre");

labenNombre.textContent= datosUsuarioJS.nombreI;


const labenApellido = document.getElementById("labenApellido");

labenApellido.textContent= datosUsuarioJS.apellidoI;



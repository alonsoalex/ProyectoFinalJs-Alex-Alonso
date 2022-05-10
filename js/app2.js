
const nombre =  sessionStorage.getItem("usuario");


const nombreUs = JSON.parse(nombre);
console.log(nombreUs);






const bienvenido = document.getElementById("bienvenidaU");


bienvenido.textContent = "Bienvenido "+ nombreUs.nombreI;

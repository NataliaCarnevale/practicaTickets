
const TICKET = 200;

const ESTUDIANTE = 80;
const TRAINEE = 50;
const JUNIOR = 30;
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#mail");
let cantidad = document.querySelector("#cantidadTickets");
let categoria = document.querySelector("#categoriaSelect");
let resultado = document.querySelector("#totalPago");
let btnBorrar = document.querySelector("#btnBorrar");
let btnCalcular = document.querySelector("#btnResumen");


btnCalcular.addEventListener("click", calcularTotal);
btnBorrar.addEventListener("click", borrar);

function calcularTotal(event) {
  event.preventDefault();
  let descuento = calcularDescuento(categoria.value);
  resultado.textContent = (TICKET - descuento) * cantidad.value;
}
function calcularDescuento(categoria) {
  switch (categoria) {
    case "0":
      return 0;
    case "1":
      return (TICKET * 80) / 100;
    case "2":
      return (TICKET * 50) / 100;
    case "3":
      return (TICKET * 15) / 100;
    default:
      break;
  }
}

function mostrarTotal() {
    totalPago.textContent = calcularTotal();
  }

function borrar() {
  nombre.value = "";
  apellido.value = "";
  cantidad.value = "";
  categoria.value = "";
  resultado.textContent = "";
}
  
function soloTexto(string){
    let out = '';
    let filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    for (let i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
    return out;
}

function limpiarRegistros (){
    let bcantidad = parseInt(document.getElementById('cantidadTickets').value);
    let bcategoria = parseInt(document.getElementById('categoriaSelect').value);
    

    var mensaje;
    var opcion =   ("¿Esta seguro que desea borrar los campos?");
    if (opcion == true) {
        mensaje = "Borrado";
        window.location.reload()
        
	} else {
	    mensaje = "No se ha borrado";
        $("#cantidadTickets").val(bcantidad);
        $("#categoriaSelect").val(bcategoria);
	}
	alert(mensaje);
}

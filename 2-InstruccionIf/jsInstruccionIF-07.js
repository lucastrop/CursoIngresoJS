function mostrar()
{
let estado;
let edad;
edad=parseInt(document.getElementById("txtIdEdad").value);
estado= document.getElementById("estadoCivil").value; 

if (edad<18 && estado != "Soltero") {
	alert("Es muy peqqueño para no ser soltero.");
}
	


}//FIN DE LA FUNCIÓN
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
nombre=document.getElementById ("txtIdNombre").value;
edad=document.getElementById ("txtIdEdad").value;
	
	//puede ser esto o lo de abajo alert("Usted se llama " + nombre + " y tiene " + edad + " años");
	alert(`usted se llama ${nombre} y tiene ${edad} años`);
}

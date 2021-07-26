/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let resultado;

	num1= parseInt(document.getElementById ("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById ("txtIdNumeroDos").value);
	
	resultado = num1 + num2;
	alert("La suma es " + resultado);
}

/*uso parseInt para convertir una cadena a números, parseFlow no toma en 
cuenta caracteres que no son números*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let maximo = 10;
	let minimo = 1;
	numero= Math.round(Math.random() * (maximo - minimo) + minimo);
if(numero>8) {
	alert("EXCELENTE, nota = " + numero);
}
else if (numero>=4) {
	alert("APROBÓ nota = " + numero);
}
else {
	alert("Vamos, la próxima se puede, nota = " + numero);
}
}//FIN DE LA FUNCIÓN
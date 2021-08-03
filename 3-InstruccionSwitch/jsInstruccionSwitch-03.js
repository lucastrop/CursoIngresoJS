function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	
	let mes;
	mes =document.getElementById("txtIdMes").value;
	switch(mes){
		
		case "Febrero" :  
        alert("Este mes no tiene más de 29 días")
        break;
		default:
			alert("Este mes tiene más de 28 días");
			break;	
	}
// default: es un case sin valor, si no entró en ninguno de los valores anteriores entra acá.)


}//FIN DE LA FUNCIÓN
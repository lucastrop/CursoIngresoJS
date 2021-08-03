function mostrar()
{
	//tomo el mes
	let mes;
	mes =document.getElementById("txtIdMes").value;
	switch(mes){
		case "Enero" :
			alert ("Que comiences bien el año");
			break;
			//break rompe el flujo del programa, nos saca del case en este caso
		
		case "Marzo" : 
		alert("A clases!!!");
		      break;
        case "Julio":
			alert("Se vienen las vacaciones!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!");
			break;
	}
	
//no puedo usar mayor, menor, igual, etc con switch.


}//FIN DE LA FUNCIÓN
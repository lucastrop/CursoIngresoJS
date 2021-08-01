/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
let resultado;
sueldo = parseFloat(document.getElementById("txtIdSueldo").value); 
resultado= sueldo*110 / 100	;
document.getElementById("txtIdResultado").value = resultado;
}
// no uso parseInt porque el numero de sueldo puede no ser entero, uso pasrseFloat
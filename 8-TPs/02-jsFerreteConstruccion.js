/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo;
let ancho;
let alambre;
largo=parseInt(document.getElementById("txtIdLargo").value);
ancho=parseInt(document.getElementById("txtIdAncho").value);
alambre=(2*ancho+2*largo)*3;
alert("La cantidad de alambre a comprar es " + alambre + " metros");
}
function Circulo () 
{
	let radio;
    let alambre;
    radio=parseInt(document.getElementById("txtIdRadio").value);
    const PI = 3.14;
    alambre= 2*PI*radio*3;
    alert("Se necesitan " + alambre + " metros");
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
largo=parseInt(document.getElementById("txtIdLargo").value);
ancho=parseInt(document.getElementById("txtIdAncho").value);
area=largo*ancho;
cemento=2*area;
cal=3*area;
//o alert("Para un contrapiso de " + area + "m2 se necesitan comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");
alert (`Para un cotnrapiso de ${area}m2 necesito comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal.`);
}
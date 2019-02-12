const cowsay = require("cowsay");
const inicio = require('./inicio');
const nodo = require('./nodo');
const final = require('./final');


const nombre = "Eff";
const edad = Math.round( Math.random() *100);  //esta variable (let) permite ser cambiada
const cabello = "castaño";
const lugar = "Centraal";
const so = "node y JavaScript";

//let historia = "Hola soy " + nombre + ", y tengo sueño. Tengo " + edad + " y tengo el cabello color " + cabello;

console.log(inicio.historia(nombre, edad, cabello));
// console.log(nodo.historia(lugar));
// console.log(final.historia(so));
console.log(cowsay.say({
	text : "Muuuuuuuuu",
	e : "O o",
	T : "II "
}));


// Math.round(); redondea hacia arriba o abajo
// Math.floor(); redondea hacia abajo
// Math.ceil(); redondea al siguiente

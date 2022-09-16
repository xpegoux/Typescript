import { PizzariaRecife } from "./PizzariaRecife";
import { PizzariaOlinda } from "./PizzariaOlinda";

const pizzarecife = new PizzariaRecife();
let rcalabresa = pizzarecife.createPizza(1);
let rmargherita = pizzarecife.createPizza(2);
let rmuçarela = pizzarecife.createPizza(3);

console.log(rcalabresa.name);
console.log(rmargherita.name);
console.log(rmuçarela.name);

console.log("===========================")

const pizzaolinda = new PizzariaOlinda();
let omargherita = pizzaolinda.createPizza(2);
let ocalabresa = pizzaolinda.createPizza(1);
let omuçarela = pizzaolinda.createPizza(3);

console.log(ocalabresa.name);
console.log(omargherita.name);
console.log(omuçarela.name);
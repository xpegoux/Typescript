import { Mage } from "./Mage"
import { Priest } from "./Priest"
import { Warrior } from "./Warrior"
import { Personagem } from "./Personagem"
//O tipo Personagem é um polimorfismo do objeto mage,priest,warrior.
let mage: Personagem = new Mage("Gandalf");
let priest: Personagem = new Priest("Gasgoine");
let warrior: Personagem = new Warrior("Oirstein");

//agora temos a tipagem Personagem abstrata e as classes concretas (Mage, Warrior, Priest).

console.log(mage.atacar());
console.log(priest.atacar());
console.log(warrior.atacar());
console.log(mage.defender());
console.log(priest.defender());
console.log(warrior.defender());
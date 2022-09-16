import { Mage } from "./Mage"
import { Priest } from "./Priest"
import { Warrior } from "./Warrior"
import { Personagem } from "./Personagem"
//O tipo Personagem é um polimorfismo do objeto mage,priest,warrior.
let mage: Personagem = new Mage("Gandalf");
let priest: Personagem = new Priest("Gasgoine");
let warrior: Personagem = new Warrior("Artorias");

console.log(mage);
console.log(priest);
console.log(warrior);
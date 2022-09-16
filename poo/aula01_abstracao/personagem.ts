//Classes, Atributos e Método Construtor!

import prompt from "prompt-sync"; //lib para realizar leituras do teclado

//classe
class Personagem{
    //metodo construtor
    constructor(
        //atributos, em typescript devemos especificar o tipo das variáveis.
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
        ) {
    }
}
let teclado = prompt();
let option: number = 0;

let rhaenyra: Personagem = new Personagem("Rhaenyra", 100, 40, 50, 20);
while (option != 99) {
    console.log("*===================Personagem===================*");
    console.log("|1. Treinar Ataque                               |");
    console.log("|2. Treinar Defesa                               |");
    console.log("|3. Treinar Energia                              |");
    console.log("|4. Treinar Vida                                 |");
    console.log("|98. Status                                      |");
    console.log("|99. Sair                                        |");
    console.log("*================================================*");

    option = +teclado("Escolha uma opção: "); //o operador "+" é para a entrada de dados ser considerada do tipo string

    //ações para a opção escolhida no menu

    switch (option) {
        case 1:            
            if (rhaenyra.ataque >= 150) {
                console.log("Ataque máximo atingido!");
            } else {
                rhaenyra.ataque += 2;
            }
            break;
        case 2:            
            if (rhaenyra.defesa >= 150) {
                console.log("Defesa máxima atingida!");
            } else {
                rhaenyra.defesa += 2;
            }
            break;
        case 3:            
            if (rhaenyra.energia >= 130) {
                console.log("Energia máxima atingida!");
            } else {
                rhaenyra.energia += 1;
            }
            break;
        case 4:            
            if (rhaenyra.vida >= 100) {
                console.log("Vida máxima atingida!");
            } else {
                rhaenyra.vida += 1;
            }
            break;
        case 98:
            console.log(rhaenyra)
        default:
            break;
    }
}
import readline from "readline-sync";

export default class View {
    private opcao: number;
    constructor() { this.opcao = 0 }
    
    //startar o programa e retornar o menu com a escolha da opção\\
    start(): number {
        console.log(" ======================================= ");
        console.log("||             Calculadora             ||");
        console.log(" ======================================= ");

        return this.menu();        
    }

    //menu\\
    private menu(): number {
        console.log("|| 1 - Somar dois numeros              ||");
        console.log("|| 2 - Subtrair dois numeros           ||");
        console.log("|| 3 - Multiplicar dois numeros        ||");
        console.log("|| 4 - Exponenciar dois numeros        ||");
        console.log("|| 5 - Dividir dois numeros            ||");
        console.log("|| 6 - Percentual entre dois numeros   ||");
        console.log("|| 0 - Sair                            ||");
        console.log(" ======================================= ");

        this.opcao = readline.questionInt("[*] Digite a opcao: ");
        return this.opcao
    }

    //como ts não retorna dois valores, foi preciso passar-los como array, esta função irá receber os numeros a serem calculados\\
    getOperando(): Array<number> {
        console.log("\nDigite os valores a serem calculado");

        let primeiroNumero: number = readline.questionInt("Primeiro valor: ");
        let segundoNumero: number = readline.questionInt("Segundo valor: ");
        
        let numeros = [primeiroNumero, segundoNumero];
        return numeros;
    }

    //retornar o resultado dos operandos\\
    mostrarResultado(resultado: number | undefined): void {
        if (this.opcao == 6){
            console.log("##########################################");
            console.log(`O resultado calculado foi: ${resultado}%`);
            console.log("##########################################");
        } else {
            console.log("##########################################");
            console.log(`O resultado calculado foi: ${resultado}`);
            console.log("##########################################");

        }
    }
    
    //mensagem de finalização do programa, após sair do menu\\
    finalizar(): void {
        console.log("Programa finalizado!");
    }
}
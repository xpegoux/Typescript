import View from "../view/view";
import Calculadora from "../model/Calculadora";

export default class CtrlCalculadora {
    private view: View;
    private model: Calculadora;

    constructor() {
        //composição para usar os métodos de model e view\\
        this.view = new View;;
        this.model = new Calculadora;
    }
    //Função inicializadora que irá chamar o start do view\\
    start(): void {
        let opcao: number = this.view.start();
        
        while (opcao != 0) { //loop para sair do menu

            while (opcao < 0 || opcao > 6) { //verificação de erros caso opções sejam digitadas incorretamente
                console.clear();
                console.log("\n[!] Opção inválida [!]");
                opcao = this.view.start();
            }

            let resultado = this.operacao(opcao); 
            console.clear();           
            this.view.mostrarResultado(resultado);
            
            opcao = this.view.start();
        } 

        this.view.finalizar();
    }


    //retornar os dados do model, passando o primeiro e segundo números na posição 0 e 1 do array respectivamente.
    private operacao(opcao: number) {
            let numeros = this.view.getOperando();

            if (opcao == 1) { 
                return this.model.soma(numeros[0], numeros[1])
            } else if (opcao == 2) {
                return this.model.subtracao(numeros[0], numeros[1]);
            } else if (opcao == 3)  {
                return this.model.multiplicacao(numeros[0], numeros[1]);
            } else if (opcao == 4) {
                return this.model.exponencial(numeros[0], numeros[1]);
            } else if (opcao == 5) {
                return this.model.divisao(numeros[0], numeros[1]);
            } else if (opcao == 6) {
                return this.model.restoDivisao(numeros[0], numeros[1]);
            }
        }
}
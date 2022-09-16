export interface IPizza {
    get name(): string;
}

export class PizzariaRecifeCalabresa implements IPizza {
    public get name(): string {
        return "Pizzaria de Calabresa Recife";
    }
}

export class PizzariaRecifeMargherita implements IPizza {
    public get name(): string {
        return "Pizzaria de Margherita Recife";
    }
}

export class PizzariaRecifeMuzzarela implements IPizza {
    public get name(): string {
        return "Pizzaria de Muçarela Recife";
    }    
}

export class PizzariaOlindaCalabresa implements IPizza {
    public get name(): string {
        return "Pizzaria de Calabresa Olinda";
    }
}

export class PizzariaOlindaMargherita implements IPizza {
    public get name(): string {
        return "Pizzaria de Margherita Olinda";
    }
}

export class PizzariaOlindaMuzzarela implements IPizza {
    public get name(): string {
        return "Pizzaria de Muçarela Olinda";
    }    
}
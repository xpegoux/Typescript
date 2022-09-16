import { IPolygon } from "./IPolygon";

export class Rectangle implements IPolygon {
    draw(): string {
        return "Desenhou um Retângulo!";
    }
}

class lalala implements IPolygon {
    draw(): string {
        throw new Error("Method not implemented.");
    }
    
}
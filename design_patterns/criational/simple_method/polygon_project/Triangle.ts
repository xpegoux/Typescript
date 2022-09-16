import { IPolygon } from "./IPolygon";

export class Triangle implements IPolygon {
    draw(): string {
        return "Desenhou um Triângulo!";
    }
}
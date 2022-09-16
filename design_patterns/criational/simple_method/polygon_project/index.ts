import { FactoryPolygon } from "./FactoryPolygon";

const triangulo = FactoryPolygon.createPolygon(3);
const retangulo = FactoryPolygon.createPolygon(4);
//const inexistente = FactoryPolygon.createPolygon(2); error mensagem ao passar lados invalidos no momento
console.log(triangulo.draw());
console.log(retangulo.draw());
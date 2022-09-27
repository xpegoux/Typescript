import Observer from "./classes/object";
import Subject from "./classes/subject";

//Aqui tems três observers
const observerOne = new Observer(1);
const observerTwo = new Observer(2);
const observerThree = new Observer(3);

const subject = new Subject();

//Com o subject na mão, a gente adiciona os observers acima
subject.subscribe(observerOne);
subject.subscribe(observerTwo);
subject.subscribe(observerThree);

//Uma vez em que os observers estão inscritos dentro do subject, iremos fazer a notificação
subject.notifyAll();

//retirando o observer two
subject.unsubscribe(observerTwo);
subject.notifyAll();
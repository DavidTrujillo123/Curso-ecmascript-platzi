//funcion generadora
function* iterate(object){
    for (const iterator of object) {
        yield iterator; //yield es un tipo de return que para la ejecución
        //pero guarda su estado
    }
}

const names = iterate(['David','Juan', 'Ana', 'Fredi']);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);


function* plus(){
    let num = 0;
    while(true){
        yield num++;
    }
}

const counter = plus();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

const conter2 = plus();

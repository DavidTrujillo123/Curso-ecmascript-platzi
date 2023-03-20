//para funciones generadoras

async function* example (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const other = example();
other.next().then(response=> console.log(response.value));
other.next().then(response=> console.log(response.value));
other.next().then(response=> console.log(response.value));
console.log('Hellow');

async function arrayOfNames(array){
    for await (let values of array){
        console.log(values);
    }
}

const names = arrayOfNames(['Oscar', 'David', 'Ana']);
console.log('After');
//para funciones generadoras

async function* example (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const other = example();
other.next().then(response=> console.log(response.values));
other.next().then(response=> console.log(response.values));
other.next().then(response=> console.log(response.values));
console.log('Hellow');

async function arrayOfNames(array){
    for (let values of array){
        yield await Promise.resolve(values);
    }
}

const names = arrayOfNames(['Oscar', 'David', 'Ana']);
console.log('After');
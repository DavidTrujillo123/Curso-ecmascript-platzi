const asyncFunction = () =>{
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => {
            resolve('Succes!')
            }, 2000)
        : reject(new Error('Error!'));
    })
}

const anotherFuncition = async () =>{
    const something = await asyncFunction();
    console.log(something);
}

console.log('Before'); 
anotherFuncition();
console.log('After');

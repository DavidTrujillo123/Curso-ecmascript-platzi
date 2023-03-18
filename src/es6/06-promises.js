//Algo que va a pasar
const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Succes');
        }
        else{
            reject('Mistake');
        }
    })
}

anotherFuncion()
.then(response => console.log(response))//resolve
.catch(err => console.log(err)); //reject

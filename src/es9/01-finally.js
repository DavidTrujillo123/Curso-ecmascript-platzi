const promiseFunction = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Succes');
        }
        else{
            reject('Error');
        }
    })
}

promiseFunction()
.then(respose => console.log(respose))
.catch(err => console.log(err))
.finally(() => console.log('Finally'));

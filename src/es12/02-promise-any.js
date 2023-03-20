const promise1 = new Promise((resolve,reject)=> reject('Error'));
const promise2 = new Promise((resolve,reject)=> resolve('Succes'));
const promise3 = new Promise((resolve,reject)=> resolve('Succes 2'));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));
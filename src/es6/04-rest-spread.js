// arrays destructuring

let frutas = ['Apple', 'Banana'];
let [a, b] = frutas;
console.log(a, b);

// object destructuring

let user = {
    username: 'David',
    age: 21
};
let {username, age} = user;
console.log(username, age);

// spread operator

let person = {
    name: 'David',
    age: 28
};
let country = 'MX';

let data = { ...person, country};
console.log(data);
data = {id: 1, ...person, country};
console.log(data.id);

// rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4);


  
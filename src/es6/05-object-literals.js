function newUser (name, age, country, uId){
    return{
        name,
        age,
        country,
        uId: uId
    }
}
let ejemplo = newUser('David', 21, 'EC', 1);
console.log(ejemplo);
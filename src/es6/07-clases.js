class User {
    //atributos

    //constructor
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //getter and setters
    get uAge(){
        return this.age
    }
    set uAge(age){
        this.age = age;
    }
    //metodos
    speak(){
        return console.log(`${this.name} esta hablando...`);
    }
    toString(){
        return `${this.name}, ${this.age}, ${this.country}`;
    }
}

const david = new User('David', 18, 'EC');
david.uAge = 21;
let edadDavid = david.uAge; 
console.log(david.toString());
console.log(edadDavid);
david.speak();
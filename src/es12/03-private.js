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
    //metodo privado
    #speak(){
        return console.log(`${this.name} esta hablando...`);
    }
    toString(){
        return `${this.name}, ${this.age}, ${this.country}`;
    }
}
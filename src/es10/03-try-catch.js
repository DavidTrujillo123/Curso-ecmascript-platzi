import { sayHello } from "../es6/module.mjs";

try {
    sayHello();
} catch (error) {
    console.log(error+' error');
}

//Optional Catch Binding
try {
    sayHello();
} catch {
    console.log('error');
}

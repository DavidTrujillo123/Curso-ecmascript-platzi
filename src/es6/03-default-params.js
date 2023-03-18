function newUser(name, age, country){
    var name = name || 'David';
    var age = age || 21;
    var country = country || 'EC';
    console.log(name, age, country);
}

newUser();
newUser('Juan', 31, 'CO');

function newAdmin(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('David', 21, 'EC');

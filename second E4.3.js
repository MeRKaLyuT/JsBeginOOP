let string = 'name';
const exObject = {
    name: 'Maxim',
    age: '15',
}

function validate(str, object){
    return console.log(object.hasOwnProperty(str))
}

validate(string, exObject);

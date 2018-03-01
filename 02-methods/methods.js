
// a) Puedes contar cuantas letras tiene tu nombre?

var name = 'Gianluca';
var myName = 'My Name has ' + name.length + ' letters';

console.log(myName);

// b) Añade tu apellido e indica en que posición se encuentra

var nameComp = 'Gianluca Bragaglia';
var myString = 'Your first last name starts on position ' + nameComp.indexOf('Bragaglia');

console.log(myString);

// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

var myString2 = 'My name is ' + nameComp.slice(0,8);

console.log(myString2);

// d) Ahora, solo tu apellido.

var myString3 = 'My lastname is ' + nameComp.slice(9);

console.log(myString3);

// d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

var myNewString = nameComp.slice(9);

console.log(nameComp +", " + myNewString) // Tony Stark, Stark

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

var myNewString = nameComp.replace(nameComp, 'Hello, Mr. ') + nameComp.slice(9);

console.log(myNewString) // Hello, Mr. Stark 


//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

var mySelection = 'my lastname is ' + nameComp.slice(9).toUpperCase();

console.log(mySelection) // my lastname is STARK


//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

var something = name + " is awesome"
console.log(something) // "Tony is awesome"


//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
myFirstLastnameLetters = nameComp[0] + '.' + nameComp[9];
console.log(myFirstLastnameLetters) // S.Y
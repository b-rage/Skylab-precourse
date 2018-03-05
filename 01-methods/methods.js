
// a) Puedes contar cuantas letras tiene tu nombre?

function myName(name) {
   console.log('My Name has ' + name.length + ' letters');
   
}


myName('Gianluca');

// b) Añade tu apellido e indica en que posición se encuentra

function myString(nameComp) {
  console.log('Your first last name starts on position ' + nameComp.indexOf('Bragaglia'));
  
}


myString('Gianluca Bragaglia');

// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
function myString2(nameComp) {
    console.log('My name is ' + nameComp.slice(0,8));
    
}

myString2('Gianluca Bragaglia');

// d) Ahora, solo tu apellido.
function myString3(nameComp) {
    console.log('My lastname is ' + nameComp.slice(9));
    
}

myString3('Gianluca Bragaglia');

// d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

function myString4(nameComp) {
    var myNewString = nameComp.slice(9);
    console.log(nameComp +", " + myNewString);
    
}

myString4('Gianluca Bragaglia'); // Tony Stark, Stark

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
function myString5(nameComp) {
    console.log(nameComp.replace(nameComp, 'Hello, Mr. ') + nameComp.slice(9));
    
}


myString5('Gianluca Bragaglia'); // Hello, Mr. Stark 



//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
function myString6(nameComp) {
    console.log('my lastname is ' + nameComp.slice(9).toUpperCase());
    
}

myString6('Gianluca Bragaglia'); // my lastname is STARK


//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
function myString7(nameComp) {
    console.log(nameComp.slice(0,8) + " is awesome");
    
}
myString7('Gianluca Bragaglia'); // "Tony is awesome"


//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
function myFirstLastnameLetters(nameComp) {
    console.log(nameComp[0] + '.' + nameComp[9]);
    
}
 myFirstLastnameLetters('Gianluca Bragaglia'); // S.Y
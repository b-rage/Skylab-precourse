//Arrays
//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

var n = ['GIANLUCA BRAGAGLIA'];
var myName = n[0][0] + '/' + n[0][1] + '/' + n[0][2] + '/' + n[0][3] + '/' + n[0][4] + '/' + n[0][5] + '/' + n[0][6] + '/' + n[0][7] + '/' + n[0][9] + '/' + n[0][10] + '/' + n[0][11] + '/' + n[0][12] + '/' + n[0][13] + '/' + n[0][14] + '/' + n[0][15] + '/' + n[0][16] + '/' + n[0][17] ;



console.log(myName) // T/O/N/Y/S/T/A/R/K

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
var myName =  n[0][9] + '|' + n[0][10] + '|' + n[0][11] + '|' + n[0][12] + '|' + n[0][13] + '|' + n[0][14] + '|' + n[0][15] + '|' + n[0][16] + '|' + n[0][17] ;
console.log(myName) // S|T|A|R|K

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
var myName = [];
for(var i=0; i<8 ; i++) {
    myName.push(i+1 + 'º' + ' ' + n[0][i]);
}

console.log(myName) // 1º T, 2º O, 3º N, 4º Y

//Resource: https://www.w3schools.com/jsref/jsref_split.asp

//d)Como en el ejercicio anterior, pero seleccionando tu apellido
var myLastName = [];
for(var i=9; i<=17; i++) {
    myLastName.push(i + 'º' + ' ' + n[0][i]);
}
console.log(myLastName) // 5º S, 6º T, 7º A, 8º R, 9º K
//Resource: https://www.w3schools.com/jsref/jsref_length_array.asp

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
var myInitials = n[0][0] + '.' + n[0][9];
console.log(myInitials) // T.S
/*
//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

console.log(mySelector) // My name is TONY and i'm 40 years old
//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

console.log(myCityAdd) // City added to array! => Tony, Stark, 40, New York
//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

myCityAdd() // City added to array! => Tony, Stark, 40, New York
myCityDelete() // City deleted! => Tony, Stark, 40
//j) Ahora, elimina el nombre y asegura los cambios Resources: https://www.w3schools.com/jsref/jsref_shift.asp

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición? Resources: https://www.w3schools.com/jsref/jsref_splice.asp

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

numbers = [...]
var multByTwo = numbers.map(...)
//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

var num = 3; // cada número se multiplicará por 3
function multByNum(num){
    var arrayMult = numbers.map(...)
    return arrayMult
}
//Resource: https://www.w3schools.com/jsref/jsref_map.asp

//m) Podrías mostrarlos en el orden inverso? Resources: https://www.w3schools.com/jsref/jsref_sort.asp

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times.
//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

console.log(repeatLetters) // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark */
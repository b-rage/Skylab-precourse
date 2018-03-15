//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
/*
function (myName){
    console.log('hello + myName')//output: 'hello myName'
}
//b) Intenta retornar los valores en lugar de usar console.log

function (myName){
    return 'hello + myName' // output: 'hello myName'
}
*/
//c) Ahora, añade tu edad y concaténala al return
function yo(myName, myAge){
    return "Hello " + myName + ", you're " +  myAge + " years old." 
}
console.log(yo('Gianluca',45));

//Cual es la diferencia entre console.log() & return?

//Read this => http://stackoverflow.com/questions/21020608/difference-between-console-log-and-return-in-javascript
//d) Iguala tu función a una variable y ejecútala

//var MyFunction = ... //output: 'hello myName, you're myAge years old.'
//myFunction()
//=> Podemos guardar resultados de funciones en una variable, es decir, sus returns

//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados 
var myName = function(param1) {
    return param1 + '...aka b-rage';
}

var myAge = function() {
    return 45;
}
console.log(myName() + ' ' + myAge());
 //output: IronMan 40

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.


var myRandomNumber = Math.floor(Math.random()*(10-1+1)+1);  //Math.floor(Math.random()*(max-min+1)+min);


//output: IronMan 45
console.log(myName() + ' ' + (myAge() + myRandomNumber).toString());  

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

var myName = function(param1) {
    return param1 + '...aka b-rage';
}

var myAge = function(param2) {
    return param2;
}
//myName(param1) + myAge(param2) //output: IronMan 43
//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas

function me(){
    var ran = Math.random() * 10;
    var x = myName();
    var y = myAge(ran);
    return x + ' ' + y;
} 
console.log(me());
 //output: IronMan 40

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()

// output: IronMan 6457689
//http://www.w3schools.com/jsref/jsref_random.asp

//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
function me2(){
    var ran = Math.floor(Math.random()*(50-0+1)+0);
    var x = myName('Gianluca');
    var y = myAge(ran);
    if(ran<20) {
        console.log('tienes menos de 20 años');
        
    }else if(ran<50 && ran>21) {
        console.log('tienes entre 21 y 50 años');
    }
    return x + ' ' + y
} 
console.log(me2());
// output: IronMan 3...Sure you're Tony Stark?

//j) Al return de la función name(), concaténale otro mensaje

// output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark? 

//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

 // output: The first function returns: 'Tony Stark...aka IRONMAN', The second function returns: '34...Sure you're Tony Stark?' 

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

//return x + y // output: "The first function returns: Hulk... You're not IRONMAN!"
//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

function GenerateRandom(){
    var randomNumber = Math.floor(Math.random()*(50-32+1)+32)
    return randomNumber;
}

function father(){
    var numR = GenerateRandom()
    return myName('Gianluca') + ' ' + GenerateRandom();
}
console.log(father());


//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.

function father2(){
    
    return   GenerateRandom() +  myName('Gianlucab') + myAge(45);
           
}
console.log(father2());


//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.
function father3(){
    var a = GenerateRandom();
    var b = myName('Gianlucab');
    var c = myAge(45);
    var arr = [];
    arr.push(a,b,c);
    console.log(arr);
    
    return  a + b + c;
           
}
console.log(father3());

//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

function father4(prop){
    var a = GenerateRandom();
    var b = myName('Gianlucab');
    var c = myAge(45);
    var arr = [];
    arr.push(a,b,c,prop);
    console.log(arr);
    
    return  a + b + c;
           
}


function callF() {
    father4("hello from the dark side...");
}
console.log(callF());


/*
p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

function gandFather(){
    var names = ['hulk', 'ironMan', '...']
    var selectedName...
    var selectedName2...
    if(father(selectedName) > father(selectedName2))
        ...
    else
        ...
    return father(selectedName).push().join()...
}*/
//p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.
function father5(prop){
    var a = {GenerateRandom()};
    var b = {myName(Gianlucab)};
    var c = {myAge()};
    console.log(arr);
    
    return  a + b + c;
           
}


function callF2() {
    father5("hello from the dark side...");
}
console.log(callF2());
/*
p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.
*/
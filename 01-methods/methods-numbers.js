

//Numbers
//a) Que hora es? Declara la hora como número y devuelvela como String
var hourNow = new Date();
var hours = hourNow.getHours();
var minute = hourNow.getMinutes();
console.log("I'ts " + hours.toString() + ":" + minute.toString() + " of morning") // I'ts 10.45 of morning
//Hint => https://www.w3schools.com/jsref/jsref_tostring_number.asp

//b) Nono, que hora exactamente? Dime la hora sin minutos
console.log("I'ts around " + hours.toString() + " of morning")// It's around 10 of morning

//c) Ahora, declara tu hora y muéstrala redondeada.
function roundHour(hour) {
    console.log( Math.ceil(hour) + '!');
}
roundHour(10.34) // 11!
//Hint => https://www.w3schools.com/jsref/jsref_round.asp

//d) Hagamos una calculadora. Primero, la suma.

function sum(num1, num2){
    var theSum = num1 + num2;
    console.log('The sum of ' + num1 + ' + ' + num2 + ' is ' + theSum);
    
}
//sum(7, 3) //The sum of 7+3 is 10

//d1) Añade la resta...

function sum(num1, num2){
    var theSum = num1 + num2;
    var theRest = num1 - num2;
    console.log('The sum and the rest of ' + num1 + ' and ' + num2 + ' is ' + theSum + ' and ' + theRest);
    
}

//sum(7, 3) // The sum and rest of 7 and 3 is 10 and 4 


//d2) Y la multiplicación
function sum(num1, num2){
    var theSum = num1 + num2;
    var theRest = num1 - num2;
    var theMulti= num1 * num2;
    console.log(theSum + ', ' + theRest + ' and ' + theMulti);
    
}

//sum(7, 3) // 10, 4 and 21

//d3) Por ultimo, la división
function sum(num1, num2){
    var theSum = num1 + num2;
    var theRest = num1 - num2;
    var theMulti = num1 * num2;
    var theDivide = (num1 / num2).toFixed(2);
    console.log(theSum + ', ' + theRest + ', ' + theMulti + ' and ' + theDivide);
    
}

//sum(7, 3) // 10, 4, 21 and 2.3

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

//sum(7, 'ciao') // ....?!

//e) Podemos controlar este error con un condicional if?
function sum(num1, num2){
    if (isNaN(num1) === true || isNaN(num2) === true) {
        console.log("You can't do this operation!");    
    }else{
        var theSum = num1 + num2;
        var theRest = num1 - num2;
        var theMulti = num1 * num2;
        var theDivide = (num1 / num2).toFixed(2);
        console.log(theSum + ', ' + theRest + ', ' + theMulti + ' and ' + theDivide);
        
        
    }
}
sum(7, 6); // You can't do this operation!/**/
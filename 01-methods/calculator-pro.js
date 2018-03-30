
/*
Podrías hacer que le calculadora relizara operaciones sean cuales sean el numero de argumentos pasados a la funcion? Hint => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments Hint => https://msdn.microsoft.com/es-es/library/he95z461
function sum(){
    var acc = 0;
    for (num in arguments){
    console.log(num)
    acc += arguments[num]   
    }
    return acc
}
sum(2,3,4) // acc=9
Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.
calculator(n1,n2)
//Output => sum, subs, mult, div...
prompt("New numbers? y/n")
    Case "y" => calculator(n1,n2)
                //Output => sum1, subs1, mult1, div1, sum2, subs2, mult2, div2...
    Case "n" => "Bye!"



//PART 1 OK!!

function calculatorPro() {
    var sum = 0;
    var rest = arguments[0] * 2;
    var multi = 1;
    var divide = arguments[0] * arguments[0];
    for (num in arguments) {
        sum += arguments[num];
        rest -= arguments[num];
        multi *= arguments[num];
        divide /= arguments[num];


    }
    if (isNaN(arguments[num]) === true || arguments[num] == undefined || arguments[num] == 0) {
        console.log('tienes que introducir numeros');
    } else if (arguments.length == 1) {
        console.log('La raiz cuandrada del numero introducico es ' + Math.sqrt(arguments[0]).toFixed(3));

    } else {
        console.log('La suma de los numeros introducidos es ' + sum.toFixed(3) + ', la resta es ' + rest.toFixed(3) + ' la multiplicación es ' + multi.toFixed(3) + ' la división es ' + divide);
    }

}

calculatorPro(18,3,2); 
calculatorPro(0);     
calculatorPro();      
calculatorPro(0, 0);  
calculatorPro("Pepe"); 
calculatorPro("Pepe", "Antonio");  
calculatorPro("Pepe", 0);          
calculatorPro(1.0, 0);
calculatorPro(0, "Pepe");
calculatorPro(54);
calculatorPro(3, 8);


PART 2

*/





function calculatorPro() {
    var arr = [];
    for(num in arguments) {
        arr.push(arguments[num]);
    }
    
    
    sumF = function() {

        return arr.reduce(function(a,b){return a+b;});
    }

    restF = function() {

        return arr.reduce(function(a,b){return a-b;});

    }    
    
    multiF = function() {
        
        return arr.reduce(function(a,b){return a*b;});
    }
    
    divF = function() {
        
        return arr.reduce(function(a,b){return a/b;});
    }


    function startCalc() {
        if (isNaN(arr[num]) === true || arr[num] == undefined || arr[num] == 0) {
            console.log('tienes que introducir numeros');
        } else if (arr.length == 1) {
            console.log('La raiz cuandrada del numero introducico es ' + Math.sqrt(arr[0]).toFixed(3));

        } else {
            console.log('La suma de los numeros introducidos es ' + sumF() + ', la resta es ' + restF() + ' la multiplicación es ' + multiF() + ' la división es ' + divF());

            var choice = prompt('quieres hacer otras operaciones?  y/n');
            var choiceM = choice.toUpperCase();
            if (choiceM !== 'Y' || choiceM !== 'N') {

                switch (choiceM) {
                    case 'Y':
                        calculatorPro(23, 7, 8);
                        break;
                    case 'N':
                        console.log('Bye bye!');
                        break;
                }
            }else{
                switch (choiceM) {
                    case 'Y':
                        calculatorPro(23, 7, 8);
                        break;
                    case 'N':
                        console.log('Bye bye!');
                        break;


                }
            }
        }


    }

    startCalc();
}

calculatorPro(18, 3, 2);
calculatorPro(0);
calculatorPro(0, 0);
calculatorPro("Pepe");
calculatorPro("Pepe", "Antonio");
calculatorPro("Pepe", 0);
calculatorPro(1.0, 0);
calculatorPro(0, "Pepe");
calculatorPro(54);
calculatorPro(3, 8);
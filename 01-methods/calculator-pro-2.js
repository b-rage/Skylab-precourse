

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
    Case "n" => "Bye!" */
    function calculatorPro() {

        var numArr = prompt('Introducir los numeros separados por coma: \npor exemplo 34,65,4,12  ....');
        var arr;
        
        
        sumF = function() {
    
            return arr.reduce(function(a,b){return (a+b).toFixed(3)});
        }
    
        restF = function() {
    
            return arr.reduce(function(a,b){return (a-b).toFixed(3)});
    
        }    
        
        multiF = function() {
            
            return arr.reduce(function(a,b){return (a*b).toFixed(3)});
        }
        
        divF = function() {
            
            return arr.reduce(function(a,b){return (a/b).toFixed(3)});
        }
    
    
        function startCalc() {
            arr = numArr.split(',').map(Number);
            for(var j=0; j<arr.length; j++) {
                if (isNaN(arr[j]) === true || arr[j] == undefined || arr[j] == 0) {
                    console.log('tienes que introducir numeros');
                    calculatorPro();
                }
            }
            if (arr.length == 1) {
                console.log('La raiz cuandrada del numero introducico es ' + Math.sqrt(arr[0]).toFixed(3));
    
            } else {
                console.log('La suma de los numeros introducidos es ' + sumF() + ', la resta es ' + restF() + ' la multiplicación es ' + multiF() + ' la división es ' + divF());
            }
            var choice = prompt('quieres hacer otras operaciones?  y/n');
            var choiceM = choice.toUpperCase();
    
            switch (choiceM) {
                case 'Y':
                    calculatorPro();
                    break;
                case 'N':
                    console.log('Bye bye!');
                    break;
            }
        }
    
        startCalc();
    }
    
    calculatorPro();






/*
function calculatorPro() {

    var numArr = prompt('Introducir los numeros separados por coma: \npor exemplo 34,65,4,12  ....');
    var arr;
    
    
    sumF = function() {

        return arr.reduce(function(a,b){return (a+b).toFixed(3)});
    }
    console.log(sumF());
    

    restF = function() {

        return arr.reduce(function(a,b){return (a-b).toFixed(3)});

    }    
    
    multiF = function() {
        
        return arr.reduce(function(a,b){return (a*b).toFixed(3)});
    }
    
    divF = function() {
        
        return arr.reduce(function(a,b){return (a/b).toFixed(3)});
    }


    function startCalc() {
        arr = numArr.split(',').map(Number);   // trnsform string
        for(var j=0; j<arr.length; j++) {
            if (isNaN(arr[j]) === true || arr[j] == undefined || arr[j] == 0) {
                console.log('tienes que introducir numeros');
                calculatorPro();
            }
        }
        if (arr.length == 1) {
            console.log('La raiz cuandrada del numero introducico es ' + Math.sqrt(arr[0]).toFixed(3));

        } else {
            console.log('La suma de los numeros introducidos es ' + sumF() + ', la resta es ' + restF() + ' la multiplicación es ' + multiF() + ' la división es ' + divF());
        }
        var choice = prompt('quieres hacer otras operaciones?  y/n');
        var choiceM = choice.toUpperCase();

        switch (choiceM) {
            case 'Y':
                calculatorPro();
                break;
            case 'N':
                console.log('Bye bye!');
                break;
        }
    }

    startCalc();
}

calculatorPro();*/
/* calculatorPro(0);
calculatorPro();
calculatorPro(0, 0);
calculatorPro("Pepe");
calculatorPro("Pepe", "Antonio");
calculatorPro("Pepe", 0);
calculatorPro(1.0, 0);
calculatorPro(0, "Pepe");
calculatorPro(54);
calculatorPro(3, 8);
 */







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
calculatorPro();
calculatorPro(0, 0);
calculatorPro("Pepe");
calculatorPro("Pepe", "Antonio");
calculatorPro("Pepe", 0);
calculatorPro(1.0, 0);
calculatorPro(0, "Pepe");
calculatorPro(54);
calculatorPro(3, 8);





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

*/

function calculatorPro() {
    var sum = 0;
    var rest = arguments[0] * 2;
    var multi = 0;
    var divide = 0;
    for (num in arguments) {
        sum += arguments[num];
        rest -= arguments[num];


    }
    if (isNaN(arguments[num]) === true || arguments[num] == undefined) {
        console.log('tienes que introducir numeros');
    } else if (arguments.length == 1) {
        console.log('La raiz cuandrada del numero introducico es ' + Math.sqrt(arguments[0]).toFixed(3));

    } else {
        console.log('La suma de los numeros introducidos es ' + sum.toFixed(3) + ', la resta es ' + rest.toFixed(3) + ' la multiplicación es ' + multi.toFixed(3) + ' la división es ' + divide);
    }

}

calculatorPro(4,7,5);
/*calculator(0);
calculator();
calculator(0, 0);
calculator("Pepe");
calculator("Pepe", "Antonio");
calculator("Pepe", 0);
calculator(0.0, 0);
calculator(0, "Pepe");
calculator(54);
calculator(3, 8);*/
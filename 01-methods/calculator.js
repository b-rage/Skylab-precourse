
/*Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.

Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]*/

function calculator(num1, num2) {
    var sum;
    var rest;
    var multi;
    var divide;
    var rq;
    if (num2 == undefined && isNaN(num1) === false) {
        rq = Math.sqrt(num1).toFixed(3);
        console.log('la raíz cuadrada de ' + num1 + ' es ' + rq);
    } else if (isNaN(num1) === true || isNaN(num2) === true || num2 == 0 || (num1 == undefined && num2 == undefined)) {
        console.log('tienes que introducir 2 numeros');
    } else {
        sum = num1 + num2;
        rest = num1 - num2;
        multi = num1 * num2;
        divide = (num1 / num2).toFixed(3);
        var results = ['la suma de ' + num1 + ' y ' + num2 + ' es => ' + sum, 'la resta es ' + rest, 'la multiplicación es ' + multi, 'la división es ' + divide];
        console.log(results);
    }


}

calculator(0); 
calculator(); 
calculator(0,0); 
calculator("Pepe");
calculator("Pepe", "Antonio");
calculator("Pepe",0);
calculator(0.0,0);
calculator(0, "Pepe");
calculator(54); 
calculator(3, 8); 
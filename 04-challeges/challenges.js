//## Final Challenges (JS)!
//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.
/*
function showNums(nums){
    for(var i = 0; i < nums.length-1; i++){
        console.log(i+1 + 'º pareja => ' + nums[i]*2 + ' - ' + nums[i+1]*2);
        
    }

}

showNums([1,5,3,4,5,6,7,8,91,2,3,4,5,6,7,8,9])
// output =>
//1ª pareja 2 - 4
//2ª pareja 4 - 6
//3ª pareja 6 - 8
//4ª pareja 8 - 10
//5ª pareja 10 - 12
//6ª pareja 12 - 14
//7ª pareja 14 - 16
//8ª pareja 16 - 18
//Hint: Métodos útiles => push() - join() - map()

//a1) La funcion debería aceptar la array a tratar como argumento.

function showNums2(nums, multiply){
    var b = 0;
    var table = nums.map(function(x) {
        b++
        console.log(b + 'º pareja => ' + (x*multiply) + ' - ' + (x+1)*multiply)
    })
}
showNums2([1,2,3,4,5,6,7,8,9], 2)
// output =>
// 1ª pareja 2 - 4
// 2ª pareja 4 - 6
// 3ª pareja 6 - 8
//...

//a2) Pasa también el numero a multiplicar a la función como argumento

//<= el último número de arguments lo podemos tratar como el numero multiplicador...

function showNums3(nums, multiply){
    var b = 0;
    console.log('El numero escogido es ' + multiply);
    var table = nums.map(function(x) {
        b++
        console.log(b + 'º pareja => ' + (x*multiply) + ' - ' + (x+1)*multiply)
    })
}
showNums3([1,2,3,4,5,6,7,8,9], 12)
// output =>
// El numero escogido es: 12
// 1ª pareja 12 - 24
// 2ª pareja 24 - 36
// 3ª pareja 36 - 48
// 4ª pareja 48 - 60
// 5ª pareja 60 - 72
// ...

//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

function showNums4(nums, multiply){
    var b = 0;
    var a = nums[nums.length-1]
    console.log('El numero escogido es ' + a);
    var table = nums.map(function(x) {
        b++
        return (b + 'º pareja => ' + (x*a) + ' - ' + (x+1)*a)
    })
    console.log(table.splice(0,multiply));
    
}
showNums4([1,2,3,4,5,6,7,8,9,12], 3)// <= ahora, el último numero lo podriamos tomar como el delimitador
//}
// output =>
// El numero escogido es: 12
// Se quieren mostrar las 3 primeras parejas
// 1ª pareja 12 - 24
// 2ª pareja 24 - 36
// 3ª pareja 36 - 48

*/
//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci? //https://www.mathsisfun.com/numbers/fibonacci-sequence.html

function fibo(num){
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    console.log(1 + 'º posicion => ' + fib[0]);
    console.log(2 + 'º posicion => ' + fib[1]);
    for(i=2; i<=num; i++)
    {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i-2] + fib[i-1];
        console.log(i+1 + 'º posicion => ' + fib[i]);
        console.log(fib[i]);
    }
}
fibo(10);
// output: 0 1 1 2 3 5 8...

//b2) Puedes añadir además, la posición de cada resultado?

//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

//function fibo(10){}
//... 55 - pos 10º
//b5) Ahora, muestra los resultados en forma piramidal:

function fiboPyramid(num){
    var i;
    var fib = []; // Initialize array!
    var fibNew = [];

    fib[0] = 0;
    fib[1] = 1;
    for(i=2; i<=num; i++)
    {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i-2] + fib[i-1];
    }
 
    for(var j=0; j<num+1; j++){

       fibNew.push(fib[j]);
       console.log(fibNew.join());
        
    }
    for(var j=num; j>0; j--) {

        fibNew.pop(j);
        console.log(fibNew.join());
         
     }
}
fiboPyramid(10);
/* 
0
0 1
0 1 1
0 1 1 2
0 1 1 2 3
0 1 1 2 3 5
0 1 1 2 3 5 8 //To position. num
0 1 1 2 3 5
0 1 1 2 3
0 1 1 2
0 1 1
0 1
0 



//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código

var code = 3712;

function codeScript(code){

    var codeStr = code.toString();
    var codeStr1 = codeStr.substr(1);
    console.log(codeStr1 + codeStr[0]);
}
codeScript(3712);
codeScript(7123);
codeScript(1237);
codeScript(2371);
//output:/*  

// At Four call, should return the original value
//El primer numero se traslada a la última posicion. El segundo, el tercero y el cuarto suben una posición.

//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

function codeScript2(code1, code2){

    var codeStr1 = code1.toString();
    var codeStr11 = codeStr1.substr(1);
    var codeStr2 = code2.toString();
    var codeStr22 = codeStr2.substr(1);
    console.log((codeStr11 + codeStr1[0]) + '\n' + (codeStr22 + codeStr2[0]));
}
codeScript2(3712, 4578);
codeScript2(7123, 5784);
codeScript2(1237, 7845 );
codeScript2(2371, 8457);
*/
//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)
var code1E;
var code2E;
function codeScript2(code1, code2){

    var codeStr1 = code1.toString();
    var codeStr11 = codeStr1.substr(1);
    var codeStr2 = code2.toString();
    var codeStr22 = codeStr2.substr(1);
    var codeCript1 = codeStr11 + codeStr1[0];
    var codeCript2 = codeStr22 + codeStr2[0];
    var codeCript1Arr = [];
    var codeCript2Arr = [];
    for(var i=0; i<codeCript1.length; i++) {
        if(codeCript1[i]<5) {
                codeCript1Arr.push(codeCript1[i]*2);
        }else{
            codeCript1Arr.push(9-codeCript1[i]);
        }
    }
    var code1E = codeCript1Arr.join('');

    for(var i=0; i<codeCript2.length; i++) {
        if(codeCript2[i]<5) {
                codeCript2Arr.push(codeCript2[i]*2);
        }else{
            codeCript2Arr.push(9-codeCript2[i]);
        }
    }
    var code2E = codeCript2Arr.join('');
    console.log(code1E + ' ' + code2E);
    
    
}
codeScript2(3712, 4578);


//c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
var codeDeCript1Arr = [];
var codeDeCript2Arr = [];

function codeDecrypt(code1E, code2E) {
    var code1EStr = code1E.toString();
    var code2EStr = code2E.toString();
    for(var i=0; i<code1EStr.length; i++) {
        if(code1EStr[i]/2 < 5) {
                codeDeCript1Arr.push(code1EStr[i]/2);
        }else if(9 - code1EStr[i] >= 0) { 
            codeDeCript1Arr.push(code1E[i]);
        }
    }
    codeDeCript1Arr.unshift(codeDeCript1Arr[3]);
    codeDeCript1Arr.pop();
    console.log(codeDeCript1Arr);
    
}
codeDecrypt(7246, 5788);




/* c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

function codeScript(code1, code2){... codeDecrypt(code1Encrypt,code2Encrypt)}
c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
}
function codeScript("HI  ", "WE  ", "NEED", "HELP"){}
"HI__" = "dictionary[7][0]+dictionary[8][0]+dictionary[9][2]+dictionary[9][2]..." */
//d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:

//SKY
//|-|-|
//LAB Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
//Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB

function showNums(str) {
    var str1 = [];
    var str2 = [];
    var strEncr = [];
    for(var i=0; i<str.length; i++) {
        if(i<3) {
            str1.push(str[i]);
        }else{
            str2.push(str[i]);
        }
        
    }

    for(var i=0; i<str1.length; i++) {
        strEncr.push(str1[i]);
        strEncr.push(str2[i]);

    }
    console.log(strEncr);
}

showNums('skylab')


//d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

function deCript(strE) {
    var str1D = [];
    var str2D = [];
    var strDecript= [];
    for(var i=0; i<strE.length; i++) {
        if(i%2 ==0) {
            str1D.push(strE[i]);
        }else{
            str2D.push(strE[i]);
        }
    }
  
    console.log(str1D.join('') + str2D.join(''));
    
}
deCript('SLKAYB');

//d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

function skyED(str) {
    var str;
    function showNums(str) {
        var str1 = [];
        var str2 = [];
        var strEncr = [];
        for(var i=0; i<str.length; i++) {
            if(i<str.length/2) {
                str1.push(str[i]);
            }else{
                str2.push(str[i]);
            }
            
        }
    
        for(var i=0; i<str1.length; i++) {
            strEncr.push(str1[i]);
            strEncr.push(str2[i]);
    
        }
        console.log(strEncr.join(''));
        return strEncr.join('')
    }

    var strE = showNums(str);
    
    function deCript(strE) {
        var str1D = [];
        var str2D = [];
        var strDecript= [];
        for(var i=0; i<strE.length; i++) {
            if(i%2 ==0) {
                str1D.push(strE[i]);
            }else{
                str2D.push(strE[i]);
            }
        }
      
        console.log(str1D.join('') + str2D.join(''));
        
    }
    deCript(strE);
}
skyED('SKYLABCODERS');
/*
d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

sayItWithWords(5) => //output Five
sayItWithWords(23) => //output twenty-three
sayItWithWords(71) => //output seventy-one
Hint:

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

sayItWithWords(5) => //output Five, five / 5
sayItWithWords(23) => //output twenty-three, twenty + three / 20 + 3
sayItWithWords(71) => //output seventy-one, seventy + one / 70 + 1
e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

sayItWithWords(500) => //output five hundred , five hundred  / 500
sayItWithWords(233) => //output two hundred thirty three, two hundred + thirty + three/ 200 + 30 + 3
sayItWithWords(498) => //output four hundred ninety eight, four hundred + ninety + eight/ 400 + 90 + 8
f) Recibiendo el siguiente texto por parámetro a tu función... :

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
Prepara dicha función para que modifique y devuelva el texto bajo estas reglas: Signos de puntuación: -	"." => "," - "," => "" Palabras: - "dolor" => "potato" - "lorem" => "tomato" - "labor" => "cucumber" - "consequatur" => "garlic" - "ipsum" => "onion"

f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario */
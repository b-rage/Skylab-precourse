/*
BINGO GAME! 🎲🎰
Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.

Hint:

Empieza por la versión más básica!
Why?:
Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.

Si funciona con 5 números deberá funcionar con 15, no? 😁

Requisitos de la versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, remplazaremos el número por una 'x' y mostramos el cartón modificado

Sepáralo todo en funciones, englobado en una funcion global llamada bingo(), tal que:

-Function! => Generar Numero Random Bombo

-Function! => Nuevo turno (Match carton[i] === randomNum)

-Function! => Preguntar Nuevo Turno*/

function bingo() {

    var playerName = prompt('Escribe tu nombre');
    var card = [[],[],[]];
    var arrRandomNum = [];


    function addNumerCard() {
        
        for(var j=0; j<5; j++) {
            
            for(var i=0; i<3; i++) {
                
                card[i].push(generateRandom());
            }
        }
    }
    addNumerCard();
    console.log(card[0] + '\n' + card[1] + '\n' + card[2]);
   
    
    askTurn();
    
    

    function generateRandom() {
        
        var randomNum = Math.floor(Math.random()*(90-1+1)+1);
        arrRandomNum.push(randomNum);
        //console.log(arrRandomNum);
        for(var s=0; s<arrRandomNum.length-1; s++) {
            if(arrRandomNum[s] == randomNum) {
                arrRandomNum.splice(-1,1);
                randomNum = Math.floor(Math.random()*(90-1+1)+1);
                arrRandomNum.push(randomNum);
                
            }
        }
        
        
        return randomNum;
    }


    function newTurn() {
        var rand = generateRandom();
        var bingo = [['X','X','X','X'], ['X','X','X','X'], ['X','X','X','X']];
        var line = ['X','X','X','X'];
        for(var j=0; j<5; j++) {
            
            for(var i=0; i<3; i++) {
                 
                if(card[i][j] == rand) {

                    card[i].splice(card[i][j],1,'X');
                    
                }
            }
        }
        
        console.log(rand + '\n' + card[0] + '\n' + card[1] + '\n' + card[2]);
        var count = 0;
        if(bingo === card) {
            console.log('Has ganado ' + playerName + '!!!');
        }else if(card[0] === line && count == 0 || card[1] === line && count == 0 || card[2] === line && count == 0) {
            count++
            console.log('LINEA!!!');
            
            
        }else{
            askTurn();
        }
        
        
        
    }


    function askTurn() {

        var r = confirm("Nuevo turno?");
        if (r == true) {
            newTurn();
        }else{
            console.log('Adios ' + playerName + '!!!');
            
        }
    }

    
}
bingo();
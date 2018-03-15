function bingo() {

    var playerName = prompt('Escribe tu nombre');
    var card = [[],[],[]];
    var arrRandomNum = [];
    var countA;
    var countB;
    var countC;


    


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
        var line = ['X','X','X','X','X'];
        for(var j=0; j<3; j++) {
            
            for(var i=0; i<5; i++) {
                 
                if(card[j][i] === rand) {
                    
                    card[j].splice(i,1,'X');
                    
                }
            }
        }

        function areArrsMatch(arr1, arr2){
            return arr1.sort().toString() === arr2.sort().toString()
        }
        
        console.log(rand + '\n' + card[0] + '\n' + card[1] + '\n' + card[2]);
        
        if(areArrsMatch(bingo,card)) {
            console.log('Has ganado ' + playerName + '!!!');
        }else if(areArrsMatch(line,card[0]) && countA !== 0) {
            countA = 0;
            if(countB == 0 && countC == 0) {
                console.log('Has ganado ' + playerName + '!!!');
            }else{
                console.log('LINEA!!!');
                askTurn();
            }
            
    
	    }else if(areArrsMatch(line,card[1]) && countB !== 0) {
            countB = 0;
            if(countA == 0 && countC == 0) {
                console.log('Has ganado ' + playerName + '!!!');
            }else{
                console.log('LINEA!!!');
                askTurn();
            }

        }else if(areArrsMatch(line,card[2]) && countC !== 0) {

            countC = 0;
            if(countB == 0 && countA == 0) {
                console.log('Has ganado ' + playerName + '!!!');
            }else{
                console.log('LINEA!!!');
                askTurn();
            }
        
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


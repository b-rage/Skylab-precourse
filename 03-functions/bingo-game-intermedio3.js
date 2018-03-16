function bingo() {

    var playerName = prompt('Escribe tu nombre');
    var card = [];
    var arrRandomNum = [];
    var countA;
    var countB;
    var countC;
    addNumerCard();
    var card15 = card.slice(0,5);
    var card510 = card.slice(5,10);
    var card1015 = card.slice(10);


    


    function addNumerCard() {
            
        var trackingArr = [];
        var targetCount = 15; 
        var currentCount = 0;
        var min = 1; 
        var max = 90;
        var rnd;

        while (currentCount < targetCount) {
            rnd = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!trackingArr[rnd]) {
                trackingArr[rnd] = rnd;
                card[currentCount] = rnd;
                currentCount += 1;
            }
        }

        return card;  // Will contain 15 unique, random numbers between 1 and 90.
        
    }
    


    function generateArrRandom() {
        
        var trackingArr = [];
        var targetCount = 90; 
        var currentCount = 0;
        var min = 1; 
        var max = 90;
        var rnd;

        while (currentCount < targetCount) {
            rnd = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!trackingArr[rnd]) {
                trackingArr[rnd] = rnd;
                arrRandomNum[currentCount] = rnd;
                currentCount += 1;
            }
        }

        return arrRandomNum  // Will contain 15 unique, random numbers between 1 and 90.


    }
    generateArrRandom();

    function generateRandom() {
        
        var numRandom = arrRandomNum[arrRandomNum.length - 1];
        var r = arrRandomNum.length;
        return numRandom;

    }

    


    function newTurn() {

        var rand = generateRandom();
        var line = ['X','X','X','X','X'];
        
        
        for(var i=0; i<5; i++) {
                
            if(card15[i] === rand) {
                
                card15.splice(i,1,'X');
                console.log('Se ha encontrado el numero ' + rand);
                
                
            }
        }

        for(var i=0; i<5; i++) {
                
            if(card510[i] === rand) {
                
                card510.splice(i,1,'X');
                console.log('Se ha encontrado el numero ' + rand);
                
                
            }
        }
       
        for(var i=0; i<5; i++) {
                
            if(card1015[i] === rand) {
                
                card1015.splice(i,1,'X');
                console.log('Se ha encontrado el numero ' + rand);
                
                
                
            }
        }

        console.log(rand);
        arrRandomNum.pop();
        
            


        function areArrsMatch(arr1, arr2){
            return arr1.sort().toString() === arr2.sort().toString()
        }
        
        
        
        console.log(card15); 
        console.log(card510);
        console.log(card1015);
        
        if(areArrsMatch(line,card15) && countA !== 0) {
            countA = 0;
            if(countB == 0 && countC == 0) {
                console.log('Has ganado ' + playerName + '!!!');
            }else{
                console.log('LINEA!!!');
                askTurn();
            }
            
    
	    }else if(areArrsMatch(line,card510) && countB !== 0) {
            countB = 0;
            if(countA == 0 && countC == 0) {
                console.log('Has ganado ' + playerName + '!!!');
            }else{
                console.log('LINEA!!!');
                askTurn();
            }

        }else if(areArrsMatch(line,card1015) && countC !== 0) {

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
   
    askTurn();
    
    
}
bingo();
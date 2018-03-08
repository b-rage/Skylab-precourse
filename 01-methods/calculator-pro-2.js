



function calculatorPro() {
    var sum = 0;
    calculatorPro.sumF = function() {
        for (num in arguments){
        sum += arguments[num];  
        }
        return sum;
    }
    
    console.log(sum);
}

calculatorPro(3,4,5);



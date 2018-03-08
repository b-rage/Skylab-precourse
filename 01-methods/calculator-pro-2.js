



function calculatorPro() {
    var sum = 0;
    var sumF = function() {
        for (num in arguments){
        sum += arguments[num];  
        }
        return sum;
    }
    
    console.log(sum);
}

calculatorPro(sumF(),3,4,5);



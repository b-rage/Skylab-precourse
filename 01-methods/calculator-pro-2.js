



function calculatorPro() {
    var sum = 0;
    function sumF() {
        for (num in arguments){
        sum += arguments[num];  
        }
        return sum;
    }
    sumF();
    console.log(sum);
}

calculatorPro(3,4,5);



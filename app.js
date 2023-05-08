function addFunction(num1, num2, showResult) {
    var result = num1 + num2;
    if (showResult) {
        console.log(result);
    }
    else {
        showResult = false;
    }
}
var number1 = 20;
var number2 = 2.4;
var showResult = true;
addFunction(number1, number2, showResult);

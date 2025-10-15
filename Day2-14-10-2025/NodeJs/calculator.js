function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
 }

function divide(a,b){
    return a / b;
 }


 function calculate(fun, a, b) {
    let result = fun(a,b);
    console.log(result);
 }

    calculate(add, 5, 3);      

calculate((a,b) => a+b,10,20);

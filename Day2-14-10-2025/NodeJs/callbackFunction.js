/* function mainFunction(x){
    x();
    console.log("This is main function");
}

function myName(){
    console.log("My name is Kirishan");
}

mainFunction(myName); */



function function1(){
    setTimeout(function(){ console.log("waiting fun1"); },5000);
    console.log("This is function 1");
}
function function2(){
    setTimeout(function(){ console.log("waiting fun2"); },3000);
    console.log("This is function 2");
}

function function3(){
    console.log("This is function 3");
}

function1();
function2();
function3(); 

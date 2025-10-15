//IIFE - Immediately Invoked Function Expression

(function(){
    let x=10;
    let y=20;
    console.log(x+y);
})();


(function(x,y){
     console.log(x+y);
})(5,10);

add=(function(x,y){
    return x+y;
})(5,10);
console.log(add);


//Default function
function myName(){
    console.log("My name is Kirishan");
};


//Anonymous default function
let myName1 = function(){
    console.log("My name is Kirishan");
};

//Arrow default function
let myName8 = () => {console.log("my name is kirishhan")};

//parameterized function
function myName2(name){
    console.log("My name is " + name);
}

//parameterized anonymous function
let myName3 =function(name){
    console.log("My name is "+name);
}

//Parameterized arrow function
let myName9 = (name) => {console.log("my name is "+name)}

//returning function
function myName4(name){
    return "my name is" +name;
}

//returning anonymous function
let myName5 =function(name){
    return "my name is "+name;
}

//returning arrow function
let myName10 = (name) => {return "My name is "+name};

//default value function
function myName6(name = "Kirishan"){
    console.log("My name is " + name);
}

//default value anonymous function
let myName7 = function(name="Kirishan"){
    console.log("My name is " + name);
}

//default value arrow function
let myName11 =(name ="kirishan") => {console.log("My name is "+name);}

//arrow function with out return keyword
let myName12 = (name) => "my name is " +name;


let findBigNum1 =(x,y) => {
    if (x>y){
        return x;
    }
    else{
        return y;
    }
}

let findBigNum2 = (x,y) => x>y ? x:y;

//calling functions
myName();
myName1();
myName2("Kirishan");
myName3("Kirishan");
console.log(myName4("Kirishan"));
console.log(myName5("Kirishan"));
myName6();
myName7("kirish");
myName8();
myName9("Kirishan");
console.log(myName10("Kirishan"));
myName11();
console.log(myName12("Kirishannn"));
console.log(findBigNum2(10,15));
console.log(findBigNum2(10,5));

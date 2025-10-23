// Destructuring

let marks = [70,90,80,59,79];


let [maths, , , tamil,english,ict,science,religion] = marks;

console.log(marks);
console.log(maths);
console.log(tamil);
console.log(english);
console.log(religion);


let marks1 = [70,90,80,59,79]; //... -> rest operator
let [maths1,tamil1,...ict1] = marks1;

console.log(ict1);


console.log("***********************************************")

//default destructure array

let marks3 = [70,90,80,59,79];
let [maths2=50, tamil2=45,english2=60,ict2=79,science2=98,religion2=87] = marks3;

console.log(maths2);
console.log(tamil2);
console.log(english2);
console.log(religion2);

console.log("***********************************************")


//nested destructure array

let marks4 = [[10,20],57,67,[45,56,58],90,95];
let [[maths4_fside,maths4_sside],tamil4,english4,[ict4_fside,ict4_sside,ict4_tside],science4,religion4] = marks4;


console.log(tamil4);
console.log(english4);
console.log(ict4_fside);
console.log(maths4_sside);

console.log("+++++++++++++++++++++++++++++++++++++++");

//real word example

function getStudent(){
    return ["Kirishan" , "11D", 23];
}

let[fname , grade , age] = getStudent();

console.log(fname);
console.log(age);
console.log(grade);
let student = new Object();

student.fname = "Kirishan";
student.lname = "Thavagnanaranjan";
console.log(student);



student.fullname2 = function (){
    return this.fname +" "+ this.lname;
}

console.log(student.fullname2());


//Arrow function
student.fullname3 =  () =>student.fname +" "+ student.lname;

console.log(student.fullname3());




let getfullName =function(){
    return student.fname+" "+student.lname;
}

student.fullname4 = getfullName();
// console.log(student);





console.log("--------------------------------------------");


//next form
// i think it is 7 th type of object creation

let student1 ={};

student1.fname = "Kirishan";
student1.lname = "Thavagnanaranjan";

console.log(student1);

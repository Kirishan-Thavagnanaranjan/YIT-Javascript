function createStudent(fname,lname,grade,dob,address){
    this.fname = fname;
    this.lname = lname;
    this.grade = grade;
    this.dob = dob;
    this.address = address;
}

let createStudent1 = function(fname,lname,grade,dob,address) {
    this.fname = fname;
    this.lname = lname;
    this.grade = grade;
    this.dob = dob;
    this.address = address;
}
let stu1 = new createStudent("Kirishan","Thavagnanaranjan","10A","2002-12-20","Jaffna");
let stu2 =new createStudent1("Lilaniya","Ranjan","11B","2000-05-31","Colombo");

console.log(stu1); 
console.log(stu2);


// function object with method

function createName(fname,lname){
    this.fname = fname;
    this.lname =lname;
    this.fullname = function(){
        return this.fname + " " + this.lname;
    }
}

let name1 =new  createName("Kirishan","Thavagnanaranjan");
console.log(name1.fullname()); 
console.log(typeof name1);


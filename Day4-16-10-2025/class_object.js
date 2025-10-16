class Student{
    constructor(fname, lname){
        this.fname = fname;
        this.lname= lname;
    }

   fullname(){
        return this.fname + " " + this.lname;
    }
}


let student1 = new Student("Kirishan","Thavagnanaranjan");

console.log(student1.fullname());
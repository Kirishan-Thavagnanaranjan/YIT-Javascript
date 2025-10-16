class Students{
    constructor(fname,lname,grade,subject,address,age){
        this.fname=fname;
        this.lname=lname;
        this.grade=grade;
        this.subjects=subject;
        this.address=address;
        this.age=age;
    }

        getFullName(){
        return this.fname +" "+ this.lname;
        }

    

}




let stu1 = new Student("Kirishan","Rajan","11D",["Maths","Science","Tamil"],"Jaffna",23);
console.log(typeof Student);
console.log(typeof stu1);
console.log(stu1.getFullName());



 Students.foreach(student => {
    console.log(`{Students.fname}+{}`)
 })
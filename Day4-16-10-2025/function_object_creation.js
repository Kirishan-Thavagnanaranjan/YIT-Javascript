function createStudent(fname, lname,grade,dob,address){ 
    return {
        fname: fname,
        lname: lname,
        grade: grade,
        dob: dob,
        address: address
    };
}


let stu1 = createStudent("Kirishan","Thavagnanaranjan","10A","2002-12-20","Jaffna");
let stu2 = createStudent("Arun","Kumar","10B","2002-11-15","Colombo");

console.log(stu1);
console.log(stu2);
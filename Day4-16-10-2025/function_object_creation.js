/* function createStudent(fname, lname,grade,dob,address){ 
    return {
        fname: fname,
        lname: lname,
        grade: grade,
        dob: dob,
        address: address
    };
} */


function createStudent(fname, lname,grade,dob,address){ 
    return {
        fname,
        lname,
        grade,
        dob,
        address
    };
}
let stu1 = createStudent("Kirishan","Thavagnanaranjan","10A","2002-12-20","Jaffna");
let stu2 = createStudent("Arun","Kumar","10B","2002-11-15","Colombo");


let students = [
    createStudent("Kirishanth","Thavagnanaranjan","10A","2002-12-20","Jaffna"),
    createStudent("raj","Kumar","10B","2002-11-15","Colombo")
]

// Define column widths
const col1 = 15; // first name
const col2 = 25; // last name
const col3 = 15; // address
const col4 = 12; // dob


console.log(
    "First Name".padEnd(col1) +
    "Last Name".padEnd(col2) +
    "Address".padEnd(col3) +
    "DOB".padEnd(col4)
);
console.log("-".repeat(col1 + col2 + col3 + col4));

// Print each student's data
students.forEach(student => {
    console.log(
        student.fname.padEnd(col1) +
        student.lname.padEnd(col2) +
        student.address.padEnd(col3) +
        student.dob.padEnd(col4)
    );
});





console.log(stu1);
console.log(stu2);
console.log(students);
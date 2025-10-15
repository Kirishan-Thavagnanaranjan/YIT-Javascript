let students = [
    {
        fname: "Kirishan",
        lname: "Thavagnanaranjan",
        address: "Jaffna",
        dob: "20-12-2002"
    },
    {
        fname: "Sanjith",
        lname: "Nitiyanthan",
        address: "vavuniya",
        dob: "01-06-1998"
    },
    {
        fname: "selvan",
        lname: "srimagesvaralingam",
        address: "karainagar",
        dob: "08-08-2002"
    }
]

for (let student of students){
    console.table(student);
}

console.table(students);


console.log("First Name Last Name Address DOB");
students.forEach(student => {
    console.log(`|${student.fname} | ${student.lname} | ${student.address} | ${student.dob}|`);
    console.log("---------------------------------------------------");
});


// Print header
console.log("First Name\t\tLast Name\t\t\tAddress\t\tDOB");
console.log("---------------------------------------------------------------");

// Print each student's details
students.forEach(student => {
    console.log(`${student.fname}\t\t${student.lname}\t\t${student.address}\t\t${student.dob}`);
});



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

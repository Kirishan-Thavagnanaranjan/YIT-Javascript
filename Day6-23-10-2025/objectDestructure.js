let student = {
    'fname' : "Kirishan",
    'lname' : "Thavagnanranjan",
    'age': 23
}

let{fname,lname,age,grade="10A"} = student;

console.log(fname);
console.log(age);

let {fname:firstname , lname:lastname,age:vajasu} = student;
console.log(firstname);
console.log(fname);

console.log(grade);
console.log(student);
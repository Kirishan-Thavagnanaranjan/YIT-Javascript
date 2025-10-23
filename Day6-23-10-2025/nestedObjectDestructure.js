let student ={
    'fname': "Kirishan",
    lname : "Thavagnanaranjan",
    grade : 10,
    subject: {maths:100 , science : 49,ict:98}
};


// let{fname , lname ,subject:{maths,science,ict}} = student;

// console.log(maths);
// console.log(subject)



//rest operators
let{fname , lname ,...subject} = student;
console.log(subject);
console.log(fname);
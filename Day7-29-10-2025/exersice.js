export let students = [
    {
        fname : "Kirishan",
        lname : "Thavagnanaranjan",
        grade  :10,
        subjects: {maths:78 , science : 98,ict :99}
    },
    {
        fname : "Kirishanth",
        lname : "Thavagnanaranjan",
        grade  :11,
        subjects: {maths:74 , science : 38,ict :69}
    },
    {
        fname : "Lilaniya",
        lname : "Thavagnanaranjan",
        grade  :12,
        subjects: {maths:88 , science : 98,ict :95}
    },
    {
        fname : "Bavithiran",
        lname : "Thavagnanaranjan",
        grade  :13,
        subjects: {maths:28 , science : 38,ict :49}
    },
    {
        fname : "Rakini",
        lname : "Thavagnanaranjan",
        grade  :8,
        subjects: {maths:38 , science : 99,ict :89}
    }
];

export default function print(){
console.log("-------------------------------------------------------------------------------")
console.log("| " +
        "First Name".padEnd(15) +"| " +
        "Last Name".padEnd(20) +"| " +
        "Grade".padEnd(7)+"| " +
        "Maths".padEnd(8)+"| " +
        "Science".padEnd(8)+"| " +
        "ICT".padEnd(8)+"| " 
)
console.log("-------------------------------------------------------------------------------")

for (let{fname , lname , grade , subjects:{maths , science , ict}} of students){
    //console.log(`First Name : ${fname}    Last Name : ${lname}    Grade : ${grade}  Marks : maths = ${maths}, science =  ${science}, ict =  ${ict}`);
    console.log("| " +
        fname.padEnd(15) +"| " +
        lname.padEnd(20) +"| " +
        String(grade).padEnd(7)+"| " +
        String(maths).padEnd(8)+"| " +
        String(science).padEnd(8)+"| " +
        String(ict).padEnd(8) +"| " 
)
}
console.log("-------------------------------------------------------------------------------")
}

print();
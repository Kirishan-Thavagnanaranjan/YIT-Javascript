class Students{
    constructor(fname,lname,grade,subjects,address,dob){
        this.fname=fname;
        this.lname=lname;
        this.grade=grade;
        this.subjects=subjects;
        this.address=address;
        this.dob=dob;
    }

        getFullName(){
            return this.fname +" "+ this.lname;
        }

    
        getAge(){
            const birthDate = new Date(this.dob);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if(monthDiff<0 || (monthDiff===0 && today.getDate() < birthDate.getDate())){
                age--;
            }
            return age;
        }

}




let stu1 = new Students("Kirishan","Rajan","11D",["Maths","Science","Tamil"],"Jaffna","20-12-2002");
let stu2 = new Students("Selvan","lingam","11E",["English","Science","Drama"],"KKS","8-8-2002");
let stu3 = new Students("Tanushan","sinnarasa","11D",["Hindu","Science","maths"],"Urumpirai","7-5-2002");
let stu4 = new Students("Viturshan","sangar","11D",["Maths","Science","Tamil"],"Chavakarceri","23-5-2002");
let stu5 = new Students("Arooran","sundar","11D",["Maths","Agriculture","Tamil"],"Kodikamam","9-6-2002");

let students = [stu1,stu2,stu3,stu4,stu5];

const tableData = students.map(student =>{
    const data={};

    for (let key in student){
        if(Array.isArray(student[key])){
            data[key] = student[key].join(",");
        }
        else{
            data[key] =student[key];
        }
    }
    data.fullName = student.getFullName();
    data.age = student.getAge();

    return data;
})

console.table(tableData);
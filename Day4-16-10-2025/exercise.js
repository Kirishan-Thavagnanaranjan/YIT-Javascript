class Students{
    constructor(fname,lname,grade,subjects,address,age){
        this.fname=fname;
        this.lname=lname;
        this.grade=grade;
        this.subjects=subjects;
        this.address=address;
        this.age=age;
    }

        getFullName(){
            return this.fname +" "+ this.lname;
        }

    

}




let stu1 = new Students("Kirishan","Rajan","11D",["Maths","Science","Tamil"],"Jaffna",23);
let stu2 = new Students("Selvan","lingam","11E",["English","Science","Drama"],"KKS",23);
let stu3 = new Students("Tanushan","sinnarasa","11D",["Hindu","Science","maths"],"Urumpirai",23);
let stu4 = new Students("Viturshan","sangar","11D",["Maths","Science","Tamil"],"Chavakarceri",23);
let stu5 = new Students("Arooran","sundar","11D",["Maths","Agriculture","Tamil"],"Kodikamam",23);

let students = [stu1,stu2,stu3,stu4,stu5];

const tableData = students.map(student =>{
    const data={};

    for (let key in student){
        if(Array.isArray(studnet[key])){
            data[key] = student[key].join(",");
        }
        else{
            data[key] =student[key];
        }
    }
})
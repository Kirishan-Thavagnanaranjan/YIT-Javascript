class Student{
    constructor(id,name,mark1,mark2,mark3){
        this.id = id ;
        this.name  =  name;
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
        this.total = this.calTotal();
        this.average = this.calAvg();
        this.result = this.getResult();
        
    }

    calTotal(){
        return this.mark1 + this.mark2 +this.mark3;
    }

    calAvg(){
        return this.total / 3;
    }

    getResult(){
        let result ="";
        if(this.average >=75){
            result = "A";
        }
        else if (this.average>=65){
            result = "B";
        }
        else if (this.average >=55){
            result = "C";
        }
        else if (this.average >= 45){
            result = "S";
        }
        else {
            result = "F";
        }
        return result;
    }

    display(){


       console.log("Student Name : " +this.name );
       console.log("total is : " +this.total);
       console.log("Average is : " +this.average);
       console.log("result is : " +this.result);


    }


}

let stu1 = new Student(1,"kirishan",80,90,95);
let stu2 = new Student(2,"Kirishanth",60,70,80);
let stu3 = new Student(3,"Lilaniya",60,90,89);

let students = [stu1,stu2,stu3];

stu1.display();
console.log("**************************************")
console.log(stu1);
console.log("**************************************")
console.log(students);


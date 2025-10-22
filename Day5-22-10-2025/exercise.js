class Student{
    constructor(id,name,mark1,mark2,mark3){
        this.id = id ;
        this.name  =  name;
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
        
    }


    calTotal(){
        let total = this.mark1 + this.mark2 +this.mark3;
        return total;
    }

    calAvg(total){
        let avg = total / 3;
        return avg;
    }

    getResult(avg){
        let result = "";
        if(avg >75){
            result = "A";
        }
        else if (avg>65){
            result = "B";
        }
        else if (avg >55){
            result = "C";
        }
        else if (avg > 45){
            result = "S";
        }
        else {
            result = "F";
        }
        return result;
    }

    display(){
       let total =  this.calTotal();
       let avg = this.calAvg(total);
       let result= this.getResult(avg);


       console.log("Student Name : " +this.name );
       console.log("total is : " +total);
       console.log("Average is : " +avg);
       console.log("result is : " +result);


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


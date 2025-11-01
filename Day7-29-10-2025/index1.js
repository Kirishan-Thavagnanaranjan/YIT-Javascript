import { Student } from "./class.js";
import {calTotal,calAvg,getResult} from "./functions.js"

let stu1 = new Student(1,"kirishan",80,90,95);
let stu2 = new Student(2,"Kirishanth",60,70,80);
let stu3 = new Student(3,"Lilaniya",60,90,89);

let students = [stu1,stu2,stu3];

stu1.calTotal(80,90,95);
stu1.calAvg();
stu1.getResult();
stu1.display();
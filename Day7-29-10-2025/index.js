// // import { getStudent ,getStudent1 as stu1 ,stu2} from './student.js';
// // // import getStudent3 from './student.js';
// // import getStudent4  from './student.js';

// import getStudent4,* as stu from './student.js'

// // getStudent();
// // stu1();
// // stu2();
// // // getStudent3();
//  getStudent4();


// stu.getStudent1();

// import { students } from "./exersice.js";
import print from "./exersice.js";
import {Student} from "../Day5-22-10-2025/exercise2.js";

// students
// print();


let stu1 = new Student(1,"kirishan",80,90,95);
let stu2 = new Student(2,"Kirishanth",60,70,80);
let stu3 = new Student(3,"Lilaniya",60,90,89);

let students = [stu1,stu2,stu3];

stu1.display();
console.log("**************************************")
console.log(stu1);
console.log("**************************************")
console.log(students);
export function calTotal(mark1,mark2,mark3) {
    return total = mark1 + mark2 + mark3;
}

export function calAvg(total) {
    return avg =  total / 3;
}

export function getResult(average) {
    let result = "";
    if (average >= 75) {
        result = "A";
    }
    else if (this.average >= 65) {
        result = "B";
    }
    else if (this.average >= 55) {
        result = "C";
    }
    else if (this.average >= 45) {
        result = "S";
    }
    else {
        result = "F";
    }
    return result;
}

export function display(name,total,average,result) {


    console.log("Student Name : " + name);
    console.log("total is : " + total);
    console.log("Average is : " + average);
    console.log("result is : " + result);


}
// Tasks/Activities:
console.log("Activity 1: Variable Declarations");
// Task 1:** Declare a variable using `var`, assign it a number, and log the value to the console.
var num = 23;
console.log(num);




// Task 2:** Declare a variable using `let`, assign it a string, and log the value to the console.


let str = "Devkaran";
console.log(str);


//Activity 2: Constant Declaration

//Task 3:** Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const checkBool = 1 < 4;
console.log(checkBool);


console.log("Activity 3: Data Types");

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.

const checkNull = null;
const checkArray = [1, 2, 3, 4, 5];
const checkObj = {
    language: "Java Script",
    shortName: "JS"
}
const checkSymbol = Symbol("Key1");
const checkUndefine = undefined;
const bigInt = BigInt("123456789123456789");

const dataArr= [checkNull, checkArray, num, checkObj, str, checkSymbol, checkBool,  checkUndefine, bigInt];

for(let i of dataArr){
    console.log(`TYPE OF ${i} is ${typeof i}`);
}


console.log("Activity 4: Reassigning Variables");
// Task 5:** Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let firstValue = 200;
console.log(firstValue);

firstValue = 369;
console.log(firstValue);

console.log("Activity 5: Understanding `const`")
// Task 6:** Try reassigning a variable declared with `const` and observe the error.


const reassignValue = 13;
console.log(reassignValue);

reassignValue = 369963;
console.log(reassignValue);

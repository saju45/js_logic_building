
// Function to sum two numbers and print the result
// const sumOTwoNumbers=(a,b)=>{
//     const sum=a+b;
//     console.log(sum);
    
// }

// sumOTwoNumbers(5,10);


// area of rectangle
// const areaOfRectangle=(length,breadth)=>{
//     if(length<=0 || breadth<=0){
//         console.log("Invalid input");
//         return;
//     }
//     const area=length*breadth;
//     console.log(area);
// }

// areaOfRectangle(5,10);
// areaOfRectangle(-7,3);
// areaOfRectangle(6,4);
// areaOfRectangle(0,5);


// const evenOdd=(a)=>{
    
//     return a%2===0 ? "Even":"Odd";
// }

// console.log(evenOdd(5));
// console.log(evenOdd(10));
// console.log(evenOdd(0));
// console.log(evenOdd(-3));
// console.log(evenOdd(-8));


// const printLargeNumber=(a,b,c)=>{

// if (typeof a === "number" && typeof b==="number" && typeof c==="number" ) {
//      if (a===b && a===c) {
//         return "equal"
//     }else if (a>b && a>c) {
//         return a;
//     }else if(b>a && b>c){
//         return b;
//     }else if (c>b && c>a) {
//         return c;
//     }

//     }else{
//         return "please provide 3 valid number"
//     }
   
//     return "nagetive number"

// }

// console.log("The Large number is : ",printLargeNumber(66,6,-7));
// console.log("The Large number is : ",printLargeNumber(86,86,-86));
// console.log("The Large number is : ",printLargeNumber(86,86,86));
// console.log("The Large number is : ",printLargeNumber("86",9,-9));
// console.log("The Large number is : ",printLargeNumber(44,"9",-9));




// const smallestOf3Numbers=(a,b,c)=>{
//     let smalleestNumber=a;
    
//     if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
//          if (a===b && a===c  && b===c) {
//         return "both number are same "
//     }
//     if (b<a) {
//         smalleestNumber=b
//     }

//     if (c<smalleestNumber) {
//         smalleestNumber=c
//     }
//     }else{
//         return "Not a number"
//     }
   

//     return smalleestNumber;
// }


// console.log("the small number is : ",smallestOf3Numbers(3,5,2));
// console.log("the small number is : ",smallestOf3Numbers(3,3,3));
// console.log("the small number is : ",smallestOf3Numbers(3,3,4));
// console.log("the small number is : ",smallestOf3Numbers(3,3,-3));
// console.log("the small number is : ",smallestOf3Numbers(-4,6,3));
// console.log("the small number is : ",smallestOf3Numbers("test",5,2));
// console.log("the small number is : ",smallestOf3Numbers(44,"5",2));
// console.log("the small number is : ",smallestOf3Numbers("5",6,2));
// console.log("the small number is : ",smallestOf3Numbers(3,5,5));



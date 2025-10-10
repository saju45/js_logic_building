
// const sumOfDigit=(num)=>{
//     const numArray=num.toString().split("");
//     let result=0;
//     if (typeof num==='number'&& num>0) {
//         for (let index = 0; index < numArray.length; index++) {
//         result+=Number.parseInt(numArray[index]);                
//     }

//     return result;
//     }else{
//         return "please enter positive number"
//     }
    
// }

// console.log("sum of Digit : ",sumOfDigit(90));
// console.log("sum of Digit : ",sumOfDigit(246));
// console.log("sum of Digit : ",sumOfDigit(-4));
// console.log("sum of Digit : ",sumOfDigit(""));


// const sumOfDigit = (num) => {
//   num = Math.abs(Math.floor(num));

//   if (num === 0) return 0;                
//   const rem = num % 10;                   
//   return rem + sumOfDigit(Math.floor(num / 10));
// };

// console.log(sumOfDigit(238)); 



//wrong code from me =>

// const sumOfDigit=(num)=>{

//     let result=0;
    
//     if (num>0) {
//         const reminder=num%10;
//          result +=reminder;
//          num=num-reminder;
//          num=num/10;

//          console.log("number : ",num);
//          console.log("result : ",result);
         
//          sumOfDigit(num);
         
//     }

       
//         return result;


// }

// console.log("the sum of digit : ",sumOfDigit(238));

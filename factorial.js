

// const factoricalNumber=(number)=>{

//     let result=1;
//     if ( typeof number==='number' && number>=0) {
//          for(let index=number;index>=1;index--){
//         result*=index
//     }

//     return result;
//     }else{
//         return "please enter positive number"
//     }
   
// }


//try recursion function

// const factorialNumber = (number) => {
//   if (number <= 1) {
//     return 1;
//   }
//   return number * factorialNumber(number - 1);
// };


const factoricalNumber=(number)=>{
    if (number<0) {
        return "pleae give me positve number"
    }
    if (number>=1) {           
      return number * factoricalNumber(number - 1);
    } else {
      return 1;
    }
}


console.log(factoricalNumber(5)); // 120

console.log("factorial of : ",factoricalNumber(5));
console.log("factorial of : ",factoricalNumber(4));

// console.log("factorial of : ",factoricalNumber("5"));
console.log("factorial of : ",factoricalNumber(-6));

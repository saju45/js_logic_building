
// reverse String ///try my self
// const reverseStr=(str)=>{
//     const newArr=[...str]
//     const reverseArr=[];

//     for (let index = newArr.length-1; index >=0; index--) {
//         const element = newArr[index];      
//         reverseArr.push(element)
//     }
//     return reverseArr.join("")

// };

// console.log(reverseStr("odri"));
// console.log(reverseStr("Hello"));



//better way


const reverseString=(str)=>{
   if ( typeof str==='string') {
     let result="";
    for(let index=str.length-1;index>=0;index--){        
        result+=str[index];
    }
    return result;
   }else{
     throw new Error("give me only string number ")
   }
}

console.log(reverseString("saju"));
// console.log(reverseString(95));

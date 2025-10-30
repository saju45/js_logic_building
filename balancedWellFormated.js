

//fail concept not understand properly
// const isBanaced=(word)=>{

//     const firstLength=word.length/2;
//     const firstPart=[...word.slice(0,firstLength)];
//     const secondPart=[...word.slice(firstLength,word.length)];
    
//     let result =false;

//     for (let index = 0; index < firstPart.length; index++) {
        
//         if(firstPart[index]==='{' && secondPart[firstPart.length-1-index]==="}"||firstPart[index]==='(' && secondPart[firstPart.length-1-index]===")"||firstPart[index]==='[' && secondPart[firstPart.length-1-index]==="]"){

//             result=true;            
//         }else{
//             return false;
//         }

        
        
//     }
    

//    return result;  
    
// }

// // isBanaced("{([])}");
// console.log("isBalanced : ",isBanaced("(([]))"));






//correct code
const parantheses={
    '{':'}',
    '(':')',
    '[':']'
}


console.log("parantheses : ",parantheses['{']);
console.log("parantheses : ",parantheses['(']);
console.log("parantheses : ",parantheses['[']);


const isBalanced=(inputString)=>{

    const parantheseArray=[];

     for(let char of inputString){

      if (parantheses[char]) {
        parantheseArray.push(char);
      }else if (char==='}'|| char===")" || char==="]") {
          let lastOpeningParanthesis=parantheseArray.pop();

          if (parantheses[lastOpeningParanthesis]!=char) {
            return false;
          }

      }
     }
   
     console.log("parantheseArray : ",parantheseArray);
    console.log("parantheseArray : ",parantheseArray.pop());
    console.log("parantheseArray : ",parantheseArray);
    return true; 
}


console.log("isBalances : ",isBalanced("({[...........]})"));

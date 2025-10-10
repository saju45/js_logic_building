

//first try
// const isAlphabeticalOrder=(word)=>{
//  const characterSequence=[
//   "a","b","c","d","e","f","g",
//   "h","i","j","k","l","m","n",
//   "o","p","q","r","s","t","u",
//   "v","w","x","y","z"
// ];

// let firstCharacter=word[0];
// let secondCharacter=word[1];
// let result=false;


// if (characterSequence.includes(firstCharacter) && characterSequence.includes(secondCharacter)) {

//     if (characterSequence.indexOf(firstCharacter)<characterSequence.indexOf(secondCharacter)) {        
//     for (let index = 2; index < word.length; index++) {

//     firstCharacter=secondCharacter;
//     secondCharacter=word[index]
    
//     if (characterSequence.indexOf(firstCharacter)<characterSequence.indexOf(secondCharacter)) {        
//         result=true
//     }else{
//         return false
//     }    
// }
//     }else{
//         return false;
//     }
    
    
// }else{
//     return false
// }

// return result;
// }


// console.log(isAlphabeticalOrder("abde"));
// // console.log(isAlphabeticalOrder("aju"));
// console.log(isAlphabeticalOrder(" aju"));




//second try
// const isAlphabeticalOrder = (word) => {
//   const characterSequence = [
//     "a","b","c","d","e","f","g",
//     "h","i","j","k","l","m","n",
//     "o","p","q","r","s","t","u",
//     "v","w","x","y","z"
//   ];

//   for (let i = 0; i < word.length - 1; i++) {
//     const currentIndex = characterSequence.indexOf(word[i]);
//     const nextIndex = characterSequence.indexOf(word[i + 1]);

//     if (currentIndex === -1 || nextIndex === -1) {
//       return false; 
//     }
//     if (currentIndex > nextIndex) {
//       return false; 
//     }
//   }

//   return true;
// };

// console.log(isAlphabeticalOrder("abde")); 
// console.log(isAlphabeticalOrder("abc"));  
// console.log(isAlphabeticalOrder("a"));
// console.log(isAlphabeticalOrder("az"));   
// console.log(isAlphabeticalOrder("cba"));  
// console.log(isAlphabeticalOrder("a1b"));




//final code
function isStringInAlphabeticOrder(inputString) {
  for (let i = 0; i < inputString.length - 1; i++) {
    if (inputString[i] > inputString[i + 1]) {
      return false; 
    }
  }
  return true; 
}

console.log(isStringInAlphabeticOrder("saju"));
// // console.log(isAlphabeticalOrder("aju"));
 console.log(isStringInAlphabeticOrder(" aju"));
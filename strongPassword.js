

//first try 😊
// const isStrongPassword=(password)=>{

//     let check1=false, check2=false,check3=false,check4=false,check5=false;

//      let result=false;

//     if (password.length<8) {
//         return result;
//     }

//     for (let index = 0; index < password.length; index++) {
        
//         if (password[index].charCodeAt(0)>=65 && password[index].charCodeAt(0)<=90) {
//             check1=true;
//         }

//          if (password[index].charCodeAt(0)>=97 && password[index].charCodeAt(0)<=122) {
//             check2=true;            
//         }

//          if (password[index].charCodeAt(0)>=48 && password[index].charCodeAt(0)<=57) {
//             check3=true;
//         }
//          if (password[index].charCodeAt(0)===33) {
//             check4=true;
//         }

//          if (password[index].charCodeAt(0)===64) {
//             check5=true;
//         }
//     }

//     if (check1 && check2 && check3 && check4 && check5) {
//        result=true; 
//     }    

//     return result;
    
// }

// console.log(isStrongPassword("password@!0="));



//short version
const isStrongPassword = (password) => {
  if (password.length < 8) return false;

  let hasUpper = false,
      hasLower = false,
      hasDigit = false,
      hasSpecial = false;

  for (let char of password) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) hasUpper = true;
    else if (code >= 97 && code <= 122) hasLower = true;
    else if (code >= 48 && code <= 57) hasDigit = true;
    else if (code === 33 || code === 64) hasSpecial = true;
  }

  return hasUpper && hasLower && hasDigit && hasSpecial;
};

console.log(isStrongPassword("Password@0"));
console.log(isStrongPassword("password@!0=")); 

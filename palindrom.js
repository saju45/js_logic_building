
// const isPalindrom=(str)=>{
//     const reverseArr=[];    

//     console.log();
    
//     for(let index=str.length-1;index>=0;index--){
//         reverseArr.push(str[index])        
//     }
    
//    return reverseArr.join("")===str
// }


// console.log(isPalindrom("madam"));


const isPalindrom=(str)=>{

    for(let index=0;index<str.length/2;index++){
    
        if (str[index]!=str[str.length-1-index]) {
            return false;
        }
    }
            return true;

}


console.log(isPalindrom("level"));

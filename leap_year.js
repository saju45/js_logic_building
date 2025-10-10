
const isLeapYear=(year)=>{

    if (typeof year==='number' && year>=0 ) {
         if (year%4===0 && year%100!=0 || year%400===0 ) {
       return true 
    }else{
        return false;
    }
    }else{
        return "please enter positive number"
    }
   
}


console.log(isLeapYear(160));
console.log(isLeapYear("60"));
console.log(isLeapYear(-80));
console.log(isLeapYear(300));
console.log(isLeapYear(2000));




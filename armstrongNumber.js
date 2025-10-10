

// const sumOfArmstrong=(number)=>{

//     let sumofArmstrongNumber=0;
//     if (number===0) return 0;
//     const lastNumber=number%10;
//     sumofArmstrongNumber+=Math.pow(lastNumber,3);
//     return sumofArmstrongNumber+sumOfArmstrong(Math.floor(number/10));   
// }

// const isAmrStrongNumber=(num)=>{

//     return sumOfArmstrong(num)===num;
// }

// console.log("hello bangladesh : ",isAmrStrongNumber(153));
// console.log("123 is ArmStrong number  : ",isAmrStrongNumber(123));





const isAmrStrongNumber=(number)=>{
    const newArr=number.toString().split('');
    let sumofArmstrongNumber=0;
    for (let index = 0; index < newArr.length; index++) {
        sumofArmstrongNumber+=Math.pow(newArr[index],3);        
    }
    
    return sumofArmstrongNumber===number
}


console.log("is amrstrong Number : ",isAmrStrongNumber(123));
console.log("is amrstrong Number : ",isAmrStrongNumber(153));

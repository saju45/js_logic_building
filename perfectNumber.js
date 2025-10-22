
const isPerfectNumber=(number)=>{

    let sumofDiveder=0;
    for(let index=1;index<number;index++){

        if (number%index===0) {
            sumofDiveder+=index;
        }
    }

  return sumofDiveder === number ?true:false;    

}

console.log("this is perfect number : ",isPerfectNumber(28));
console.log("this is perfect number : ",isPerfectNumber(24));
console.log("this is perfect number : ",isPerfectNumber(496));
console.log("this is perfect number : ",isPerfectNumber(6));
console.log("this is perfect number : ",isPerfectNumber(8128));


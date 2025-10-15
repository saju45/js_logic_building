const toThePower=(base,exponent)=>{

    let result=1;
    for (let index = 0; index < exponent; index++) {
         result*=base       
    }

    return result;
}

console.log("the power of : ",toThePower(3,5));


const factors=(number)=>{
    const newArr=[];

    if (typeof number!='number' || number<=0) {
        return "please enter positive number"
    }
    for (let index = 1; index <=number; index++) {
        if (number%index===0) {            
            newArr.push(index)
        }
        
    }
   return newArr;    
}

console.log("the factors : ",factors(12));
console.log("the factors : ",factors(-9));

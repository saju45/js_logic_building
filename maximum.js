
const maximumNumber=(arr)=>{

    // const copyArray=[...arr]
    let result=arr[0];
   if(!arr.every(el => typeof el === "number")){

    return "please enter only number of array"
   }

    
    if (!Array.isArray(arr) || arr.length<=0) {        
        return "please enter valid array"
    }

     if (arr.length===1) {        
        return "pleas enter two number "
    }
    for (let index = 1; index < arr.length; index++) {
          result=result<arr[index]?arr[index]:result;            

  }

    return result
}

console.log("the maximum value is : ",maximumNumber([4,2,7,3,6,78,9]));
console.log("the maximum value is : ",maximumNumber([]));
console.log("the maximum value is : ",maximumNumber([1]));
console.log("the maximum value is : ",maximumNumber([1,5,6,3,""]));

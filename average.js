
const averageNumber=(arr)=>{

    let sum=0;
    for (let index = 0; index < arr.length; index++) {
        console.log(arr);
        
        sum+=arr[index]
    }
    
    return sum/arr.length;
}

console.log("average number : ",averageNumber([1,2,4]));

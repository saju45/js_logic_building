

const findAllWordOccurrences=(sentance,findword)=>{

    sentance=sentance.trim();

    const newArray=sentance.split(" ");
    const findWordIndex=[];


    for (let index = 0; index < newArray.length; index++) {

        if(newArray[index]===findword){            
            findWordIndex.push(index+1)     
        }   
    }    
    

    return findWordIndex;

}



console.log("find word index in array",findAllWordOccurrences("I love code because code is fun","code"));

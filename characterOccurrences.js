
// const characterOccurrences=(sentence)=>{

//     const characterArray=[...sentence];
    
//     const commonCharacter=characterArray.filter((item,index)=>characterArray.indexOf(item)===index
//     );

//     const commonCount=commonCharacter.map((item)=>{
        
//         const count=characterArray.filter((ch)=>ch===item).length
//         return{[item]:count}
    
//     })


//   console.log(commonCount);
  
    
// }

// characterOccurrences("shanawaj hossain saju")






// const characterCounter=(sentence)=>{

//     let characterObject={};

//     for (let index = 0; index < sentence.length; index++) {

//         if (characterObject[sentence[index]]===undefined) {
//             characterObject[sentence[index]]=1;
                        
//         }else if(characterObject[sentence[index]]){
//             characterObject[sentence[index]]++;
//         }
        
//     }

//     console.log(characterObject);
    
// }


// characterCounter("shanawaj hossain")










function countCharacters2 (inputString) {
inputString = inputString. toLowerCase();
const splittedString = inputString.split("");
splittedString. reduce( (acc, char) => {
   
    console.log(acc);
    if(!ac[char]){
     acc [char] = 0;
    }

acc[char] = acc[char] + 1;
return acc;
})

}
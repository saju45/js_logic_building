
//first try fail😊

// const isAnagrams=(word1,word2)=>{

//     let result =false;
//     if (word1.length!=word2.length) {
//         return false
//     }
//     for (let index = 0; index < word1.length; index++) {

//         if (word2.includes(word1[index])) {
//            result=true 
//         }else{
//             return false
//         }        
        
//     }

//     return result;
// }


// console.log(isAnagrams("cat","act"));
// console.log(isAnagrams("aab","abz"));

// console.log(isAnagrams("cat","bct"));


//second try



//solve this is correct for anagrams
const isAnagrams=(word1,word2)=>{

    word1=word1.toLowerCase();
    word2=word2.toLowerCase();
    if (word1.length!=word2.length) {
        return false;
    }

    const s1={};
    const s2={};

    for (const key of word1) { 

        if (!s1[key]) {
           s1[key]=0 
        }
        s1[key]+=1        
        
    }

        for (const key of word2) {         
        if (!s2[key]) {
           s2[key]=0 
        }
        s2[key]+=1        
        
    }
    

    return JSON.stringify(s1) === JSON.stringify(s2)

}

console.log("Is it Anagrams : ",isAnagrams("hello","Hello"));

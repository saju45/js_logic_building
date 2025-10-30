
const palinDromSubStrings=(word)=>{

    word=word.toLowerCase();
    const allSubWord=[];    

    for (let index = 0; index < word.length; index++) {
        for (let j = index; j < word.length; j++) {
             if(word.slice(index,j+1).length>1){
            allSubWord.push(word.slice(index, j+1)) 

             }
            
        }
    }

const finalArray=allSubWord.filter((item)=>{

    let reverse=[];
    for (let index = item.length-1; index >=0; index--) {
        reverse.push(item[index])
    }
    return reverse.join("")===item;
})



    return finalArray;
}

console.log("PalinDrom : ",palinDromSubStrings("madam"));
console.log("PalinDrom : ",palinDromSubStrings("ababapalindromemadam"));

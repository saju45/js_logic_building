
const sentenceToWord=(sentence)=>{

    const wordArr=sentence.split(" ");
    console.log("word Array : ",wordArr);
    
    return wordArr.filter((element)=>element!='').length;
}

console.log("there are : ",sentenceToWord("hello dear how are you"),"word");


console.log("there are : ",sentenceToWord("hello dear  how are you"),"word");


console.log("there are : ",sentenceToWord("   hello dear  how are you  "),"word");

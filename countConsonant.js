const countVowelConsonat=(word)=>{

    word=word.split(" ").join("")
    const consonatValue="aeiou";
    let consonant=0;
    for (let index = 0; index < word.length; index++) {
        
        if (consonatValue.includes(word[index])) {
            consonant+=1;
        }
    }

    return `consonant : ${consonant} and vowel : ${word.length-consonant}`;
}


console.log(countVowelConsonat("bangladeshi kddl  hi"));

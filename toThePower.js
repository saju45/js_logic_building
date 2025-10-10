const toThePower=(base,exponent)=>{

    let result=1;
    for (let index = 0; index < exponent; index++) {
         result*=base       
    }

    return result;
}

console.log("the power of : ",toThePower(3,5));export const isAlphabeticalOrder = (word) => {

    const characterSequence = [
        "a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"
    ];

    let firstCharacter = word[0];
    let secondCharacter = word[1];
    let result = false;

    // for(let index=0 ; index<word.length;index++){
    //     if (characterSequence.indexOf(word[index])===index) {
    //         result= true
    //     }else{
    //         return false
    //     }  
    // }
    if (characterSequence.includes(firstCharacter) && characterSequence.includes(secondCharacter)) {

        if (characterSequence.indexOf(firstCharacter) < characterSequence.indexOf(secondCharacter)) {

            for (let index = 2; index < word.length; index++) {

                firstCharacter = secondCharacter;
                secondCharacter = word[index];

                if (characterSequence.indexOf(firstCharacter) < characterSequence.indexOf(secondCharacter)) {
                    result = true;
                }

            }
        }


    }

    return result;
};


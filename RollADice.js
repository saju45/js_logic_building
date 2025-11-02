const prompt=require('prompt-sync')();

const numberOfDice=prompt("Enter number Of Dice : ");
const sizeOfDice=prompt("Enter your dice Size: ");

const randomDices=[];

for (let index = 0; index < numberOfDice; index++) {
    randomDices.push(Math.floor(Math.random()*(sizeOfDice-1)+1))
}

console.log("random dices : ",randomDices);



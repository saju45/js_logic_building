
const calculateInterest=(pincipalAmout,interestRate,timeDuration)=>{

    if (typeof pincipalAmout!='number' || typeof interestRate!='number' || typeof timeDuration !='number') {
        return "please enter valid number"
    }

    if (!Number.isInteger(timeDuration)) {
        return "please enter any valid year"
    }

    return ((pincipalAmout*interestRate*timeDuration)/100).toFixed(2);

}

console.log("interest rate : ",calculateInterest(47,5,1));
console.log("interest rate : ",calculateInterest(10000,5,1.5));
console.log("interest rate : ",calculateInterest(10000,"5",1));
console.log("interest rate : ",calculateInterest("10000",5,1));

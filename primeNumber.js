

const isPrime=(num)=>{


    if (typeof num!='number') {

        return "please enter valid number for checking isPrime"
        
    }

    for (let index = 2; index < num; index++) {

        if (num%index===0) {
            return false;
        }
        
    }

    return true;
}



console.log(isPrime(13));

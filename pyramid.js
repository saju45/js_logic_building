
const numberPyramid=(number)=>{

    for (let index = 1; index <= number; index++) {
        
            let row='';

            for (let space = 1; space <=number-index; space++) {

                row+=" ";
                
            }            

            for (let count = 1; count <=index; count++) {
                row+=count;
                
            }

            for (let reverse = index-1; reverse >=1; reverse--) {
                row+=reverse
                
            }
                console.log("row 3 : ",row);

            
    }


}


numberPyramid(5)
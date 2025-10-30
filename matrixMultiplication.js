

// //first try done 
// const matrixMultiplication=(array1,array2)=>{

//     const tempArray=[];
//     let result=0;
    
//     for (let row = 0; row < array1.length; row++) {
       
//         tempArray[row]=[];
//          for (let inner = 0; inner < array2[0].length; inner++) {
                
//              for (let column = 0; column < array2.length; column++) {

//             console.log(array1[row][column],array2[column][inner]);
//             result+=array1[row][column]*array2[column][inner]
//             // tempArray[row].push(array1[row][column]*array2[column][inner])
           

//         }
//         tempArray[row].push(result)
//         console.log("result : ",result);
//         result=0;
          
//     }
       
        
//     }

//     console.log("temp array : ",tempArray);
    

// }


// matrixMultiplication([[1,2,3],[4,5,6]],[[3,2],[4,4],[-1,6]])



//improve code formate

const matrixMultiplication = (A, B) => {
  const resultMatrix = [];

  for (let i = 0; i < A.length; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < B.length; k++) {
        sum += A[i][k] * B[k][j];
      }
      resultMatrix[i].push(sum);
    }
  }

  console.log("Result Matrix:", resultMatrix);
  return resultMatrix;
};

matrixMultiplication(
  [[1, 2, 3], [4, 5, 6]],
  [[3, 2], [4, 4], [-1, 6]]
);


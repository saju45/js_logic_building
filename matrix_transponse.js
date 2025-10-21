

// const matrixTransponse=(array)=>{

//     const transponse=[];

//     for (let index = 0; index < array.length; index++) {
         
//         for (let j = 0; j < array[index].length; j++) {
//             if (!transponse[j]) {
//         transponse[j] = [];
//       }

//       // row-column swap
//       transponse[j][i] = array[i][j];
//             // transponse.push([array[index][j]],)                              
//         }
//     }
    

//     console.log("transponse : ",transponse);
    
// }


// matrixTransponse([[1,2,3],[4,5,6]])













// const matrixTranspose = (array) => {
//   const transpose = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {

//       if (!transpose[j]) {
//         console.log("J : ",j);
        
//         transpose[j] = [];
//       }

//       transpose[j][i] = array[i][j];

//       console.log(`Step: array[${i}][${j}] = ${array[i][j]}`);
//       console.log("Current transpose:", JSON.stringify(transpose));
//     }
//   }

//   console.log("Final Transpose:", transpose);
//   return transpose;
// };

// matrixTranspose([
//   [1, 2, 3],
//   [4, 5, 6],
// ]);


const matrixTransponse=(array)=>{

  const rows=array.length;
  const columns=array[0].length;

  const result=[];
  for(let row=0; row<rows;row++){

    for (let column = 0; column < columns; column++) {

      if (!result[column]) {
         result[column]=[]
      }
      result[column][row]=array[row][column]
      
    }
  }
return result;

}

console.log(matrixTransponse([
  [1, 2, 3],
  [4, 5, 6],
]));

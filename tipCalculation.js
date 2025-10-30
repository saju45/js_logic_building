
//first try almost done
// const tipCalculation=(totalBill,tipPercentage)=>{

//     const parsentage=[5,10,15];
    
//     if (parsentage.findIndex((item)=>item===tipPercentage)) {        
//         return false
//     }    
    
//     let totalTip=0;
//     for (let i = 0; i < parsentage.length; i++) {

//         if (parsentage[i]===tipPercentage) {

//             totalTip=(totalBill*tipPercentage)/100;
            
//         }

//     }

//   console.log("total tip : ",totalTip);
    
// }

// console.log("pleae enter your bill amount and tip parsentage : 5,10 or 15");

// tipCalculation(500,5)

const tipCalculation = (totalBill, tipPercentage) => {

  const validPercentages = [5, 10, 15];

  if (!validPercentages.includes(tipPercentage)) {
    console.log(" Please enter a valid tip percentage: 5, 10, or 15");
    return;
  }

  const totalTip = (totalBill * tipPercentage) / 100;

  console.log("💵 Total Bill:", totalBill);
  console.log("💰 Tip Percentage:", tipPercentage + "%");
  console.log("🪙 Tip Amount:", totalTip);
  console.log("✅ Total Payable Amount:", totalBill + totalTip);
};

console.log("Please enter your bill amount and tip percentage (5, 10, or 15):");

tipCalculation(500, 10);



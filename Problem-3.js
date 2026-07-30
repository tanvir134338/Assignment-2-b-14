function calculateAiCost(tokensUsed) {
 if(typeof tokensUsed !== "number"||tokensUsed<0){
            return "Invalid"
 }
 if(tokensUsed<=500){
            return 0;
 }
 else if(tokensUsed>500){
            let freeToken = 500;
            let extraToken =0;
            extraToken= tokensUsed-freeToken
            extraToken=Math.floor(extraToken/100)
            return extraToken*5;
 }
}
// console.log(calculateAiCost(300));
// console.log(calculateAiCost(500));
// console.log(calculateAiCost(650));
// console.log(calculateAiCost(1000));
// console.log(calculateAiCost(-10));
// console.log(calculateAiCost("500"));
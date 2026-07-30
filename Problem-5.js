function averageResponseTime(times) {
  if (Array.isArray(times) === false||times.length===0) {
        return "Invalid";
   }
   for(let i=0; i<times.length; i++){
            if(typeof times[i] !=="number"){
                        return "Invalid"
            }
   }
   
 let total = 0;
    for (let i = 0; i < times.length; i++) {
         total += times[i];
    }
   
  return total / times.length;
}

// console.log(averageResponseTime([120, 200, 150, 130]));
// console.log(averageResponseTime([100, 100]));
// console.log(averageResponseTime([]));
// console.log(averageResponseTime([110,220,330,440,550]));
// console.log(averageResponseTime("logs"));
// console.log(averageResponseTime([120, "200", 150]));
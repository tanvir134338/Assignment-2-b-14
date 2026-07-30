//problem 1 solution:
function matchWinner(teamAGoals, teamBGoals) {
            if (typeof teamAGoals !=="number" || typeof teamBGoals !== "number") {
                        return "Invalid"
            }
            else if (teamAGoals > teamBGoals) {
                        return "Team A Won"
            }
            else if (teamAGoals < teamBGoals) {
                        return "Team B Won"
            }
            else{
                        return "Draw"
            }
}

//problem 2 solution:
function isElevatorSafe(weights) {
    if(Array.isArray(weights) === false){
            return "Invalid"
  }
            let totalWeight= 0;
  for(let i=0; i<weights.length; i++){
            totalWeight += weights[i];
  }
  if(totalWeight<=400){
            return true;}
            else {
                        return false;
            }
}

//problem 3 solution:
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

//problem 4 solution:
function topRatedRestaurant(restaurants) {
    if(Array.isArray(restaurants)=== false||restaurants.length===0){
            return "Invalid"
    }
    let bestRestaurant=restaurants[0];
    for(let i=1; i<restaurants.length; i++){
            if(bestRestaurant.rating<restaurants[i].rating){
                        bestRestaurant=restaurants[i]
                        
            }
    }return bestRestaurant.name.toUpperCase();
}

//problem 5 solution:
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


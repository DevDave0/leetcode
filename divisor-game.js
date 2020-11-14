var divisorGame = function(N) {
    let winArray = new Array(N+1).fill(false);
   /** This array represents whether a person will win or not with this current value
    */
   
   for (let i = 1; i <= N; i++) {
       for (let x = 1; x <= i/2; x++) {
           if(i % x === 0 && winArray[i - x] === false) {
               /** Here we check if the current x is the divisor or not 
                * also if current turn is of Alice and [i - x] would be the
                * the turn of Bob and that has to be false for Alice to win
                */
               winArray[i] = true;
               break;
           }
       }
   }
   return winArray[N];
};
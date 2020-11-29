const diStringMatch = (S) => {
    let max = S.length;
    let min = 0;
    let result = [];
    for (let i = 0; i< S.length; i++){
        if (S[i] === "I"){
            result.push(min)
            min +=1
        } else {
            result.push(max)
            max -=1
        }
        
    }
    if (S[S.length -1] === "I"){
        result.push(min)
    } else {
        result.push(max)
    }
    
    return result
};
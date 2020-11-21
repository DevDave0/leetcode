const sumZero = (n) => {
    let result = []
    let half = n/2
    
    for (let i = 1; i <= half; i++){
        result.push(i)
        result.push(-i)
    }
    if (n % 2){
        result.push(0)
    }
    return result
};
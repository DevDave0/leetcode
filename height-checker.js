const heightChecker = (heights) => {
    let count = 0;
    let targetArray = [...heights].sort((a,b) => a - b);
    for (let i = 0; i < targetArray.length; i++){
        if (heights[i] !== targetArray[i]){
            count++;
        }
    }
    return count
};
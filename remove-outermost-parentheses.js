const removeOuterParentheses = (S) => {
    let count = 0;
    let result = "";
    
    for (let i = 0; i < S.length; i++){
        if (S[i] === "("){
            if (count) {
                result += S[i]
            }
            count++
        }
        else {
            count--
            if (count) {
                result += S[i]
            }
        }
    }
    return result
};

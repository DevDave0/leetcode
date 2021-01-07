const removeDuplicates = (S) => {
    let result = []
    for (let i = 0; i < S.length; i++){
        if (!result.length){
            result.push(S[i]);
        }
        else {
            S[i] == result[result.length - 1] ? result.pop() : result.push(S[i])
        }
    }
    return result.join('')
};

const diagonalSum = (mat) => {
    let result = 0;
    for (let i = 0; i < mat.length; i++){
        result += mat[i][i];
        if (mat.length-i-1 != i){
            result += mat[mat.length-i-1][i]
        }
    }
    return result
};

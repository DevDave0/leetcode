const luckyNumbers  = (matrix) => {
    for (let i = 0; i < matrix.length; i++){
        let minRow = Math.min(...matrix[i])
        let pos = matrix[i].indexOf(minRow)
        
        if (minRow === matrix[i][pos]){
            let maxColumn = matrix[i][pos];
            for (let j = 0; j < matrix.length; j++){
                if (matrix[j][pos] > maxColumn) {
                    maxColumn = matrix[j][pos];
                    break
                }
            }
            if (maxColumn === minRow){
                return [maxColumn]
            }
        }
    }
    return []
};
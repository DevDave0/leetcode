const countBattleships = (board) => {
    let count = 0;
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            if (board[i][j] === "X"){
                if (i>0 && board[i-1][j] == "X" || j > 0 && board[i][j-1] == "X"){
                    continue;
                }
                count++;
            }
        }
    }
    return count;
};
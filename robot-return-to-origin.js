const judgeCircle = (moves) => {
    let position = [0, 0];
    let split = moves.split('')
    for (let i = 0; i < split.length; i++){
        if (split[i] === 'U'){
            position[1] += 1
        }
        else if (split[i] === 'D'){
            position[1] -= 1
        }
        else if (split[i] === 'L'){
            position[0] -= 1
        }
        else if (split[i] === 'R'){
            position[0] += 1
        }
    }
    if (position[0] === 0 && position[1] === 0){
        return true
    } else {
        return false
    }
};
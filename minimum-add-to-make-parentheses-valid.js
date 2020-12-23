const minAddToMakeValid = (S) =>{
    let left = 0;
    let right = 0;
    
    for(let i = 0; i < S.length; i++) {
        if(S.charAt(i) == '(') {
            left++;
        } else{
            if(left > 0) {
                left--;
            } else{
                right++;
            }
        }
    }
    
    return left + right;
    
};
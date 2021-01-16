const numUniqueEmails = (emails) => {
    let result = [];
    
    for (let i = 0; i < emails.length; i++){
        let splitEmail = emails[i].split('@');
        let username = splitEmail[0].replace(/\./g, '').split('+')[0]
        let fullEmail = `${username}@${splitEmail[1]}`;
        
        if (result.indexOf(fullEmail) === -1) {
            result.push(fullEmail);
        }
    }
    return result.length
};

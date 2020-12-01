const preorder = (root) => {
    const result = [];
    
    const traverseTree = (node) => {
        if (!node) return;
        
        result.push(node.val);
        
        node.children.forEach((child) => traverseTree(child));
    }
    
    traverseTree(root);
    
    return result;
};
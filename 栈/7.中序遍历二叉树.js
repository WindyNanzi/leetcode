/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root === null){return []}
    const arr = []  
    const traver = (node) => {
        if(node.left !== null){
            traver(node.left)
        }
        arr.push(node.val)
        if(node.right !== null){
            traver(node.right)
        }
    }
    traver(root)
    console.log(arr)
    return arr
};

let tree  = {
    val: 1,
    right:
    {
       val: 2,
       right: null,
       left: { val: 3, right: null, left: null } },
    left: {
        val:4,right:null,left:null
    }
}

inorderTraversal(tree)
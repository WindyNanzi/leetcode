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


// 非递归实现中序遍历二叉树
var inorderTraversal1 = function(root){
    const result = [],
          stack = []
    
    // 需要明确的一点是循环终止的条件
    while(root!== null || stack.length !== 0){
        if(root !== null){
            stack.push(root)
            root = root.left
        }else{
            root = stack.pop()
            result.push(root.val)
            root = root.right
        }
    }
    console.log(result)
    return result
}
inorderTraversal1(tree)
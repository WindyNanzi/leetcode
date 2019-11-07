/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

// 克隆图初版
var cloneGraph = function (node) {
    const nodeMap = new Map(),
          queue = []

    queue.push(node)
    
    while (queue.length!==0) {
        let temp = queue.shift()
        if(nodeMap.has(temp)){
            continue
        }else{
            let newNode = {
                val: temp.val,
                neighbors: []
            }
            nodeMap.set(temp, newNode)
            for(const neighbor of temp.neighbors){
                if(!nodeMap.has(neighbor)){
                    queue.push(neighbor)
                }
            }
        }
    }

    nodeMap.forEach((newNode, keyNode) => {
        for( const neighbor of keyNode.neighbors){
            newNode.neighbors.push(nodeMap.get(neighbor))
        }
    })

    console.log(nodeMap.get(node))
    return nodeMap.get(node)
};

const a = { val:'a',neighbors:[] },
      b = { val:'b',neighbors:[] },
      c = { val:'c',neighbors:[] },
      d = { val:'d',neighbors:[] }

a.neighbors.push(b,d)
b.neighbors.push(c,a)
c.neighbors.push(d,b)
d.neighbors.push(a,c)

cloneGraph(a)
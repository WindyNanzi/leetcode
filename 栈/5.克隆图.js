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

// cloneGraph(a)

// 不依赖具体属性的深拷贝，但仍然需要使用到Map映射
// var cloneGraph1 = function (node) {
//   const o = {},
//         srcQueue = [],
//         desQueue = [],
//         map = new Map()

//   srcQueue.push(node)
//   desQueue.push(o)
//   while(srcQueue.length !== 0){
//     let temp = srcQueue.shift(),
//         obj = desQueue.shift()
    
//     for(const key in temp){
//       if(Object.prototype.hasOwnProperty.call(temp,key)){
//         let prop = temp[key]
//         let type = typeof prop
//         switch(type){
//           case 'object':
//             if(map.has(prop)){
//               obj[key] = map.get(prop)
//               break
//             }
//             if(Array.isArray(prop)){
//               obj[key] = [] 
//             } else {
//               obj[key] = {}
//             }
//             srcQueue.push(prop)
//             desQueue.push(obj[key])
//             break
//           default:
//             obj[key] = prop
//         }
//       } else {
//         obj.__proto__[key] =  prop
//       }
//     }
//     if(!Array.isArray(temp) && !map.has(temp)) map.set(temp, obj)
//   }
//   console.log(o)
//   return o
// }

// cloneGraph1(a)
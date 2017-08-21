/**
 * webpack entry js
 * 引入其他算法模块
 * Created by wangpeng on 2017/7/26.
 */
import Stack from "./stack";
import Queue from "./queue";
import LinkedList from "./linkedList";
import Set from "./set";
import Map from "./map";
import HashTable from "./hashTable";
import Tree from "./tree";
import Graph from "./graph";
import Sort from "./sort";

//创建一个栈
const stack = new Stack();
console.log("#############################栈############################");
//入栈
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.toString());
//出栈
stack.pop();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.toString());
if (!stack.isEmpty()) {
    //清空栈
    stack.clear();
    console.log(stack.size());
}

//创建一个队列
const queue = new Queue();
console.log("#############################队列############################");
//入队
queue.enQueue(1);
queue.enQueue(2);
console.log(queue.front());
console.log(queue.size());
console.log(queue.toString());
//出队
queue.deQueue();
console.log(queue.front());
console.log(queue.size());
console.log(queue.toString());
if (!queue.isEmpty()) {
    //清空队列
    queue.clear();
    console.log(queue.size());
}

//创建一个链表
const linkedList = new LinkedList();
console.log("#############################链表############################");
//增加元素
linkedList.append(1);
linkedList.append(2);
console.log(linkedList.toString());
//插入元素
linkedList.insert(1, 3);
console.log(linkedList.toString());
//获取元素
console.log(linkedList.indexOf(2));
//删除元素
linkedList.removeAt(2);
console.log(linkedList.size());
console.log(linkedList.toString());

//创建一个集合
const set = new Set();
const otherSet = new Set();
console.log("#############################集合############################");
//增加元素
set.add(1);
set.add(2);
otherSet.add(1);
otherSet.add(2);
otherSet.add(3);
console.log(set.values());
//并集
console.log(set.union(otherSet).values());
//交集
console.log(set.intersection(otherSet).values());
//差集
console.log(set.difference(otherSet).values());
//子集
console.log(set.subset(otherSet));
//删除元素
otherSet.remove(3);
console.log(otherSet.values());

//创建一个字典类
const map = new Map();
console.log("#############################字典############################");
//增加元素
map.set("a", 1);
map.set("b", 2);
//获取元素
console.log(map.get("a"));
console.log(map.values());
//删除元素
map.remove("a");
console.log(map.getItems());

//创建一个散列表
const hashTable = new HashTable();
console.log("#############################散列表############################");
//增加元素
hashTable.put("a", 1);
hashTable.put("b", 2);
//获取元素
console.log(hashTable.get("a"));
//删除元素
hashTable.remove("a");
console.log(hashTable.get("a"));
console.log(hashTable.get("b"));

//创建一个二叉树
const tree = new Tree();
console.log("#############################二叉树############################");
//增加元素
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
//中序遍历
console.log(tree.values("inOrderTraverse"));
console.log(tree.values("inOrderTraverseUnRec"));
//先序遍历
console.log(tree.values("preOrderTraverse"));
console.log(tree.values("preOrderTraverseUnRec"));
//后序遍历
console.log(tree.values("postOrderTracerse"));
console.log(tree.values("postOrderTracerseUnRec"));

//创建一个图
const graph = new Graph();
console.log("#############################图############################");
//添加顶点
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
graph.addVertex("I");
//添加边
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("E", "I");
//获取顶点和相邻顶点组成的字典
console.log(graph.getAdjList());
//广度优先遍历
console.log("广度优先遍历");
graph.bfs("A", (item) => {
    "use strict";
    console.log(item);
});
//深度优先遍历
console.log("深度优先遍历");
graph.dfs("A", (item) => {
    "use strict";
    console.log(item);
});

console.log("#############################排序算法############################");
let sort_arr = [2, 3, 4, 1, 6, 8, 3, 1, 5, 9, 1, 2];
console.log("冒泡排序：从小到大");
Sort.bubbleSort(sort_arr);
console.log(sort_arr);
console.log("冒泡排序：从大到小");
Sort.bubbleSort(sort_arr, Sort.REVERSE);
console.log(sort_arr);

sort_arr = [2, 3, 4, 1, 6, 8, 3, 1, 5, 9, 1, 2];
console.log("选择排序：从小到大");
Sort.selectionSort(sort_arr);
console.log(sort_arr);
console.log("选择排序：从大到小");
Sort.selectionSort(sort_arr, Sort.REVERSE);
console.log(sort_arr);

sort_arr = [2, 3, 4, 1, 6, 8, 3, 1, 5, 9, 1, 2];
console.log("插入排序：从小到大");
Sort.insertionSort(sort_arr);
console.log(sort_arr);
console.log("插入排序：从大到小");
Sort.insertionSort(sort_arr, Sort.REVERSE);
console.log(sort_arr);

sort_arr = [2, 3, 4, 1, 6, 8, 3, 1, 5, 9, 1, 2];
console.log("归并排序：从小到大");
console.log(Sort.mergeSort(sort_arr));
console.log("归并排序：从大到小");
console.log(Sort.mergeSort(sort_arr, Sort.REVERSE));

sort_arr = [2, 3, 4, 1, 6, 8, 3, 1, 5, 9, 1, 2];
console.log("快速排序：从小到大");
console.log(Sort.quickSort(sort_arr));
console.log("快速排序：从大到小");
console.log(Sort.quickSort(sort_arr, Sort.REVERSE));
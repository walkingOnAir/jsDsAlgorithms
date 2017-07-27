/**
 * webpack entry js
 * 引入其他算法模块
 * Created by wangpeng on 2017/7/26.
 */
import Stack from "./stack";
import Queue from "./queue";
import LinkedList from "./linkedList";

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
/**
 * webpack entry js
 * 引入其他算法模块
 * Created by wangpeng on 2017/7/26.
 */
import Stack from "./stack";

//创建一个栈
const stack = new Stack();
console.log(stack.toString());
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

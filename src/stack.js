/**
 * 栈
 * Created by wangpeng on 2017/7/27.
 */
let _items = [];

class Stack {
    
    //入栈
    push(val) {
        _items.push(val);
    }
    
    //出栈
    pop() {
        return _items.pop();
    }
    
    //查看栈顶元素
    peek() {
        return _items[_items.length - 1];
    }
    
    //栈是否为空
    isEmpty() {
        return _items.length === 0;
    }
    
    //清空栈
    clear() {
        _items = [];
    }
    
    //栈大小
    size() {
        return _items.length;
    }
    
    toString() {
        return _items.toString();
    }
}

export default Stack;